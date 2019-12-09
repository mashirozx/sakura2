import ApoloQuery from './graphql'
import getCommentListByPostId from '../graphql/getCommentListByPostId.gql'

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
  private postId: number
  private first: number
  private last: number
  private before: string
  private after: string
  private query: object

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
    this.gql()
    //Notice the exotic function object in callback function
    const client: ApoloQuery = new ApoloQuery(this.query, this.getCommentDataCallback.bind(this))
    client.do()
  }

  private getCommentDataCallback(data: object) {
    // handle single item data
    for (let edge in data.data.postBy.comments.edges) {
      const node: node = data.data.postBy.comments.edges[edge].node
      this.pushNewCommentItem(node)
    }
  }

  private createCommentChild(childPre: childPre): Element {
    // create a div named .child-pre
    let childPreviev: Element = document.createElement('div')
    childPreviev.classList.add('child-pre')

    // loop to append preview
    for (let i in childPre) {
      let li: HTMLTemplateElement = document.querySelector('#comment-child-li-template'),
        clone: DocumentFragment = document.importNode(li.content, true),
        data = childPre[i]

      clone.querySelector('.content').innerHTML = data.content.trim()
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
      child: [number?] = JSON.parse(mate.child),
      childPre: childPre = JSON.parse(mate.childPre)

    clone.querySelector('.content').innerHTML = node.content.trim()
    clone.querySelector('.time').textContent = mate.date
    clone.querySelector('.name').textContent = mate.name
    clone.querySelector('.avatar img').setAttribute('src', mate.avatar)
    clone.querySelector('a.avatar').setAttribute('href', mate.url)
    clone.querySelector('a.name').setAttribute('href', mate.url)
    clone.querySelector('.location').textContent = mate.location
    clone.querySelector('.like .num').textContent = String(mate.like)
    clone.querySelector('.dislike .num').textContent = String(mate.dislike)

    let childDiv: HTMLElement = clone.querySelector('.child')
    if (child === undefined || child.length == 0) {
      // if has no child comment
      childDiv.remove()
    } else {
      // if has child
      let childContent: Element = this.createCommentChild(childPre)

      // add collapse
      if (child.length > 3) {
        let collapse: Element = document.createElement('div'),
          collapseText: string = `<strong>${child.length}</strong> replies in total, \
            <span class="open" data-child="${mate.child}">click to view</span>`

        collapse.classList.add('child-collapse')
        collapse.innerHTML = collapseText.trim()
        childContent.appendChild(collapse)
      }
      childDiv.appendChild(childContent)
    }
    ul.appendChild(clone)
  }

  private gql() {
    this.query = {
      query: getCommentListByPostId,
      variables: {
        "postId": this.postId,
        "first": this.first,
        "last": this.last,
        "after": this.after,
        "before": this.before
      },
    }
  }
}