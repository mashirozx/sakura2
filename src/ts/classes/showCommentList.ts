import ApoloQuery from './graphqQuerry'
import PageNavigationBar from './pageNavigationBar'
import { CreateComment } from './createComment'
import queryCommentListById from '../graphql/queryCommentListById.gql'
import queryCommentChildListById from '../graphql/queryCommentChildListById.gql'

interface Data {
  data: {
    commentListById?: NavData
    commentChildListById?: NavData
  }
}

interface NavData {
  wpDbId: number
  totalPage: number
  targetPage: number
  pageSize: number
  comments: string
}

interface Comment {
  comment_ID: number
  comment_parent: number
  comment_author: string
  comment_author_avatar: string
  url: string
  content: string
  date: string
  ua: Ua
  location: string
  level: number
  role: string
  like: number
  dislike: number
  child: {
    has_comment: boolean
    child_count: number
    preview_list: Comment[]
  }
}

interface Ua {
  os: string[]
  browsers: string[]
}

export default class ShowCommentList {
  public constructor(postId: number, pageSize: number, targetPage: number) {
    let list_comment = new ListComments(postId, pageSize, targetPage)
  }
}

/**
 * This class is used to get a post's comment list by postId
 * main() method has been called by constructor() 
 */
class ListComments {
  public db_id: number
  public page_size: number
  public target_page: number
  public total_page: number
  public data: Data
  public comments: Comment[]

  /**
   * the type of current process:  
   * `comment`: get comment by postId, display preview  
   * `child`: get comment child by commentId, display with navigation  
   * `preview`: get comment child previed by commentId, display without navigation
   * @var string
   */
  // public type: string

  /**
   * constructor
   * @param postId int
   * @param pageSize int
   * @param targetPage int
   */
  public constructor(postId: number, pageSize: number, targetPage: number) {
    this.db_id = postId
    this.page_size = pageSize
    this.target_page = targetPage
    this.main()
  }

  /**
   * decode comments field
   * @since 4.0.0
   * @param encoded 
   * @return Comment[]
   */
  protected static get_comment_decode(encoded: string): Comment[] {
    return JSON.parse(encoded)
  }

  /**
   * query callback function
   * @since 4.0.0
   * @param data
   */
  protected query_callback(data: Data): void {
    // initial
    this.data = data
    this.total_page = this.data.data.commentListById.totalPage

    let comment_list_ul: HTMLElement = document.getElementById('comment-list-ul-root')

    // decode
    this.comments = JSON.parse(this.data.data.commentListById.comments)

    // remove old html and listener
    // TODO: remove listener?
    ListComments.remove_element_child(comment_list_ul)

    // print list html
    //  - add listener for collapes
    let comments_html_list: { [id: number]: DocumentFragment; } = ListComments.gen_comment_list_html(this.comments)
    for (let i in comments_html_list) {
      // ps: the i is the comment id

      // push item to DOM
      comment_list_ul.appendChild(comments_html_list[i])

      // add click event listener on collapse open button to show child detail
      if (document.getElementById(`open-comment-${i}`)) {
        let open: HTMLElement = document.getElementById(`open-comment-${i}`)
        open.addEventListener('click', ListComments.collapse.bind(event), false)
      }
    }

    // add reply event listener
    CreateComment.reply_to_listener()

    // print nav html
    //  - add listener for nav bar
    const nav: PageNavigationBar = new PageNavigationBar(this.target_page, this.total_page)
    let nav_html: Element = nav.dom
    nav_html.setAttribute('id', `comment-list-nav-${this.db_id}`)
    comment_list_ul.appendChild(nav_html)

    let buttons: NodeList = document.querySelectorAll(`#comment-list-nav-${this.db_id} button`)

    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', this.nav_turn.bind(this, buttons[i], this.db_id), false)
    }

    // TODO: should I add a listener to the url and destroy class itself while leaving page?
  }

  public static collapse(event: MouseEvent) {
    let element = event['path'][0]
    let commentId = element.getAttribute('data-comment')
    let list_comment_child = new ListCommentChild(Number(commentId), 10, 1)
  }

  /**
   * turn page function
   * @param element 
   * @param db_id 
   */
  protected nav_turn(element: HTMLElement, db_id: number) {
    this.db_id = db_id
    this.target_page = Number(element.getAttribute('data-nav'))
    if (this.target_page !== undefined && this.target_page !== 0) {
      this.main()
      CreateComment.reset_comment_form()
      CreateComment.reply_to_listener()
    }
  }

  /**
   * remove element child
   * @since 4.0.0
   * @param element 
   */
  protected static remove_element_child(element: Element): void {
    while (element.firstChild) {
      element.removeChild(element.firstChild)
    }
  }
  /**
   * generate a list of DocumentFragment by comment items in comments
   * @since 4.0.0
   * @param comments Comment[]
   * @return DocumentFragment[]
   */
  protected static gen_comment_list_html(comments: Comment[]): { [id: number]: DocumentFragment; } {
    let li: HTMLTemplateElement = document.querySelector('#comment-list-li-template')
    let li_list: { [id: number]: DocumentFragment; } = {}

    for (let i in comments) {
      let comment: Comment = comments[i]
      // copy the template
      let li_clone: DocumentFragment = document.importNode(li.content, true)

      // insert data
      li_clone.querySelector('.comment-item').setAttribute('id', `comment-${comment.comment_ID}`)
      li_clone.querySelector('.reply').setAttribute('data-reply-to', String(comment.comment_ID))
      li_clone.querySelector('.content').innerHTML = (comment.content ? comment.content : '').trim()
      li_clone.querySelector('.time').textContent = comment.date
      li_clone.querySelector('.name').textContent = comment.comment_author
      li_clone.querySelector('.avatar img').setAttribute('src', comment.comment_author_avatar)
      li_clone.querySelector('a.avatar').setAttribute('href', comment.url)
      li_clone.querySelector('a.name').setAttribute('href', comment.url)
      li_clone.querySelector('.location').textContent = comment.location
      li_clone.querySelector('.like .num').textContent = String(comment.like)
      li_clone.querySelector('.dislike .num').textContent = String(comment.dislike)

      // insert preview to child
      if (comment.child.has_comment) {
        let preview_html_list: { [id: number]: DocumentFragment; } = ListComments.gen_comment_list_html(comment.child.preview_list)
        for (let t in preview_html_list) {
          li_clone.querySelector('.comment-list-ul').appendChild(preview_html_list[t])
        }
        // add event listener to reply
        CreateComment.reply_to_listener()

        // add collapse
        if (comment.child.child_count > 3) {
          let collapse: Element = document.createElement('div'),
            collapseText: string = `<strong>${comment.child.child_count}</strong> replies in total, \
              <span class="open" id="open-comment-${comment.comment_ID}" data-comment="${comment.comment_ID}">click to view</span>`

          collapse.classList.add('child-collapse')
          collapse.innerHTML = collapseText.trim()
          li_clone.querySelector('.comment-list-ul').appendChild(collapse)
        }
        // the DOM has not been created new, so we cannot add event listener here
      }

      // array push
      li_list[comment.comment_ID] = li_clone
    }

    return li_list
  }

  /**
   * main function
   * @since 4.0.0
   * 
   * @method query
   * @method query_callback
   */
  protected main(): void {
    const query = {
      query: queryCommentListById,
      variables: {
        "postId": this.db_id,
        "pageSize": this.page_size,
        "targetPage": this.target_page
      }
    }

    const client: ApoloQuery = new ApoloQuery(query, this.query_callback.bind(this))
    client.do()
  }
}

/**
 * This class is used to get a comment's child comment list by commentId
 * main() method has been called by constructor() 
 */
class ListCommentChild extends ListComments {
  public constructor(commentId: number, pageSize: number, targetPage: number) {
    super(commentId, pageSize, targetPage)
    this.db_id = commentId
    this.page_size = pageSize
    this.target_page = targetPage
    this.main()
  }

  /**
   * main function
   * @since 4.0.0
   * 
   * @method query
   * @method query_callback
   */
  public main() {
    const query = {
      query: queryCommentChildListById,
      variables: {
        "commentId": this.db_id,
        "pageSize": this.page_size,
        "targetPage": this.target_page
      }
    }

    const client: ApoloQuery = new ApoloQuery(query, this.query_callback.bind(this))
    client.do()
  }

  /**
   * query callback function
   * @since 4.0.0
   * @param data
   */
  protected query_callback(data: Data): void {
    // initial
    this.data = data
    this.total_page = this.data.data.commentChildListById.totalPage

    let comment_list_ul: HTMLElement = document.querySelector(`#comment-${this.db_id} .comment-list-ul`)

    // decode
    this.comments = JSON.parse(this.data.data.commentChildListById.comments)

    // remove old html and listener
    // TODO: remove listener?
    ListCommentChild.remove_element_child(comment_list_ul)

    // print list html
    let comments_html_list = <DocumentFragment[]>ListCommentChild.gen_comment_list_html(this.comments)
    for (let i in comments_html_list) {
      comment_list_ul.appendChild(comments_html_list[i])
    }

    // Add reply event listener
    CreateComment.reply_to_listener()

    // print nav html
    //  - add listener for nav bar
    const nav: PageNavigationBar = new PageNavigationBar(this.target_page, this.total_page)
    let nav_html: Element = nav.dom
    nav_html.setAttribute('id', `comment-child-list-nav-${this.db_id}`)
    comment_list_ul.appendChild(nav_html)

    let buttons: NodeList = document.querySelectorAll(`#comment-child-list-nav-${this.db_id} button`)

    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', this.nav_turn.bind(this, buttons[i], this.db_id), false)
    }

    // TODO: should I add a listener to the url and destroy self when leaving page?
  }

}