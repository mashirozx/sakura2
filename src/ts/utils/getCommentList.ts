import ApoloQuery from './graphql'
import PageNavigationBar from './pageNavigationBar'
import getCommentListByPostId from '../graphql/getCommentListByPostId.gql'
import getCommentChildListById from '../graphql/getCommentChildListById.gql'

interface commentDetail {
  data: {
    commentBy: {
      commentId: number
      childDetail: {
        childAmount: number,
        pageCount: number,
        pageSize: number,
        targetPage: number,
        detailList: string
      }
    }
  }
}

interface childItem {
  id: number
  parent: number
  name: string
  avatar: string
  url: string
  content: string
  date: string
  us: string
  location: string
  level: number
  role: number
  like: number
  dislike: number
}

interface node {
  date: string
  content: string
  commentId: number
  mate: commentMate
}

interface commentMate {
  name: string
  url: string
  avatar: string
  ua: string
  date: string
  location: string
  level: number
  role: number
  like: number
  dislike: number
  child: string
  childPre: string
}

interface childPre {
  [index: number]: childPreNode
}

interface childPreNode {
  id: number
  name: string
  url: string
  avatar: string
  content: string
  date: string
  ua: string
  location: string
  level: number
  role: number
  like: number
  dislike: number
  child: string
  childPre: string
  parent: number
}

export default class GetCommentList {
  // Varibles for getting comment items
  private postId: number
  private first: number
  private last: number
  private before: string
  private after: string

  // Varibles fot getting comment child detail list
  private commentId: number
  private pageSize: number
  private targetPage: number

  // private detailListContainer: Element

  /**
     * Get post comment bay wp post id through GraphQL
     * @author Mashiro
     * @since 4.0
     * @param {number} postId   wordpress post id
     * @param {number} first    first n contents to show
     * @param {number} last     last n contents to show
     * @param {string} before   startCursor
     * @param {string} after    endCursor
     */
  public async do(
    postId: number,
    first: number = null,
    last: number = null,
    before: string = null,
    after: string = null
  ) {
    this.postId = postId
    this.first = first
    this.last = last
    this.before = before
    this.after = after
    //Notice the exotic function object in callback function
    const client: ApoloQuery = new ApoloQuery(this.gql_getCommentListByPostId(), this.getCommentDataCallback.bind(this))
    client.do()
  }

  private getCommentDataCallback(data: object) {
    // handle single item data
    for (let edge in data.data.postBy.comments.edges) {
      const node: node = data.data.postBy.comments.edges[edge].node
      this.pushNewCommentItem(node)
    }
  }

  // TODO: combile with createCommentChild()
  private createCommentChildPre(childPre: childPre): Element {
    // create a div named .child-pre
    let childPreviev: Element = document.createElement('ul')
    childPreviev.classList.add('child-pre')

    // loop to append preview
    for (let i in childPre) {
      let li: HTMLTemplateElement = document.querySelector('#comment-child-li-template'),
        clone: DocumentFragment = document.importNode(li.content, true),
        data = childPre[i]

      clone.querySelector('.content').innerHTML = (data.content ? data.content : '').trim()
      clone.querySelector('.time').textContent = data.date
      clone.querySelector('.name').textContent = data.name
      clone.querySelector('.avatar img').setAttribute('src', data.avatar)
      clone.querySelector('a.avatar').setAttribute('href', data.url)
      clone.querySelector('a.name').setAttribute('href', data.url)
      clone.querySelector('.location').textContent = data.location
      clone.querySelector('.like .num').textContent = String(data.like)
      clone.querySelector('.dislike .num').textContent = String(data.dislike)

      childPreviev.appendChild(clone)
    }

    return childPreviev
  }

  // push comment item li to the ul
  private pushNewCommentItem(node: node) {
    let ul: HTMLElement = document.querySelector('#comment-list-ul'),
      li: HTMLTemplateElement = document.querySelector('#comment-list-li-template'),
      clone: DocumentFragment = document.importNode(li.content, true),
      mate: commentMate = node.mate,
      // TODO: child field is not actually necessary
      child: [number?] = JSON.parse(mate.child),
      childPre: childPre = JSON.parse(mate.childPre)

    clone.querySelector('.comment-item').setAttribute('data-comment-id', String(node.commentId))
    clone.querySelector('.comment-item').setAttribute('id', `comment-item-${node.commentId}`)
    clone.querySelector('.content').innerHTML = (node.content ? node.content : '').trim()
    clone.querySelector('.time').textContent = mate.date
    clone.querySelector('.name').textContent = mate.name
    clone.querySelector('.avatar img').setAttribute('src', mate.avatar)
    clone.querySelector('a.avatar').setAttribute('href', mate.url)
    clone.querySelector('a.name').setAttribute('href', mate.url)
    clone.querySelector('.location').textContent = mate.location
    clone.querySelector('.like .num').textContent = String(mate.like)
    clone.querySelector('.dislike .num').textContent = String(mate.dislike)

    let childDiv: HTMLElement = clone.querySelector('.child')

    /**
     * push child preview
     */
    if (child === undefined || child.length == 0) {
      // if has no child comment
      childDiv.remove()
    } else {
      // if has child
      let childContent: Element = this.createCommentChildPre(childPre)

      // add collapse
      if (child.length > 3) {
        let collapse: Element = document.createElement('div'),
          collapseText: string = `<strong>${child.length}</strong> replies in total, \
            <span class="open" id="open-comment-${node.commentId}" data-child="${mate.child}">click to view</span>`

        collapse.classList.add('child-collapse')
        collapse.innerHTML = (collapseText ? collapseText : '').trim()
        childContent.appendChild(collapse)
      }
      childDiv.appendChild(childContent)
    }
    ul.appendChild(clone)

    /**
     * add click event listener on collapse open button to show child detail
     */
    if (document.getElementById(`open-comment-${node.commentId}`)) {
      let open: HTMLElement = document.getElementById(`open-comment-${node.commentId}`)
      open.addEventListener('click', this.collapse.bind(this, open), false)
    }
  }

  private collapse(element: HTMLElement) {
    // div.child
    let detailListContainer = element.parentElement.parentElement.parentElement
    let commentId: number = Number(detailListContainer.parentElement.getAttribute('data-comment-id'))

    this.commentId = commentId
    this.pageSize = 5
    this.targetPage = null
    let client: ApoloQuery = new ApoloQuery(this.gql_getCommentChildListById(), this.getCommentChildCallback.bind(this))
    client.do()
  }

  private childTurnToPage(element: HTMLElement, commentId: number, detailListContainer: Element) {
    let targetPage = Number(element.getAttribute('data-nav'))
    this.commentId = commentId
    this.targetPage = targetPage
    if (targetPage !== undefined && targetPage !== 0) {
      let client: ApoloQuery = new ApoloQuery(this.gql_getCommentChildListById(), this.getCommentChildCallback.bind(this))
      client.do()
    }
  }

  private getCommentChildCallback(commentDetail: commentDetail) {
    let commentId = commentDetail.data.commentBy.commentId,
      childDetail = commentDetail.data.commentBy.childDetail,
      detailList = childDetail.detailList,
      pageCount = childDetail.pageCount,
      pageSize = childDetail.pageSize,
      targetPage = childDetail.targetPage,
      childDataList: childItem[] = JSON.parse(detailList),
      detailListContainer: Element = document.querySelector(`#comment-item-${commentId} .child`)

    /**
     * remove older content
     * TODO: add a loading page here
     */
    while (detailListContainer.firstChild) {
      detailListContainer.removeChild(detailListContainer.firstChild)
    }

    /**
     * append child detail ul to div.child
     */
    let childContent: Element = this.createCommentChild(childDataList)
    detailListContainer.appendChild(childContent)

    /**
     * append the navigation
     */
    let nav: PageNavigationBar = new PageNavigationBar(targetPage, pageCount),
      navDOM: Element = nav.dom
    navDOM.setAttribute('id', `comment-nav-${commentId}`)
    detailListContainer.appendChild(navDOM)

    let buttons: NodeList = document.querySelectorAll(`#comment-nav-${commentId} button`)

    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', this.childTurnToPage.bind(this, buttons[i], commentId, detailListContainer), false)
    }
  }

  private createCommentChild(childDataList: childItem[]): Element {
    // create a div named .child-list
    let childList: Element = document.createElement('ul')
    childList.classList.add('child-list')

    // loop to append preview
    for (let i in childDataList) {
      let li: HTMLTemplateElement = document.querySelector('#comment-child-li-template'),
        clone: DocumentFragment = document.importNode(li.content, true),
        data = childDataList[i]

      clone.querySelector('.content').innerHTML = (data.content ? data.content : '').trim()
      clone.querySelector('.time').textContent = data.date
      clone.querySelector('.name').textContent = data.name
      clone.querySelector('.avatar img').setAttribute('src', data.avatar)
      clone.querySelector('a.avatar').setAttribute('href', data.url)
      clone.querySelector('a.name').setAttribute('href', data.url)
      clone.querySelector('.location').textContent = data.location
      clone.querySelector('.like .num').textContent = String(data.like)
      clone.querySelector('.dislike .num').textContent = String(data.dislike)

      childList.appendChild(clone)
    }

    return childList
  }

  private gql_getCommentListByPostId() {
    const output = {
      query: getCommentListByPostId,
      variables: {
        "postId": this.postId,
        "first": this.first,
        "last": this.last,
        "after": this.after,
        "before": this.before
      },
    }
    return output
  }

  private gql_getCommentChildListById() {
    const output = {
      query: getCommentChildListById,
      variables: {
        "commentId": this.commentId,
        "pageSize": this.pageSize,
        "targetPage": this.targetPage
      },
    }
    return output
  }
}