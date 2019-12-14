import ApoloMutate from './graphqlMutate'
import PageNavigationBar from './pageNavigationBar'
import mutateCreateComment from '../graphql/mutateCreateComment.gql'

export interface CommentForm {
  author: string,
  email: string,
  url: string,
  comment: string,
  comment_post_ID: number,
  comment_parent: number,
  nonce: string
}

export interface PostCallbackData {
  data: {
    postComment: Data
  }
}

export interface Data {
  succeed: boolean
  message: string
  comment_ID: number
  comment_author: string
  comment_author_avatar: string
  comment_parent: number
  content: string
  date: string
  level: number
  location: string
  role: string
  ua: string
  url: string
}

/**
 * Class to do actions on comment form and listen events on comment list reply button
 * @since 4.0.0
 * 
 * @method public constructor()
 * @method static set_comment_form_value()
 * @method static reset_comment_form_button_listener()
 * @method static reset_comment_form()
 * @method static reply_to_listener()
 * @method static cancel_reply_listener()
 * @method public submit_listener()
 */
export class CreateComment {
  public author: string
  public email: string
  public url: string
  public comment: string
  public comment_post_ID: number
  public comment_parent: number
  public nonce: string
  public root_parent: number

  /**
   * create new comment
   * @since 4.0.0
   */
  public constructor() {
    // this.cancel_reply_listener()
    this.submit_listener()
  }

  /**
   * set the comment form preload information
   * @since 4.0.0
   * @param {CommentForm} data
   */
  public static set_comment_form_value(data: CommentForm) {
    // let form = <HTMLLIElement>document.getElementById(`commentform`)
    let input_author = <HTMLInputElement>document.getElementById(`author`)
    let input_email = <HTMLInputElement>document.getElementById(`email`)
    let input_url = <HTMLInputElement>document.getElementById(`url`)
    let input_comment_post_ID = <HTMLInputElement>document.getElementById(`comment_post_ID`)
    let input_comment_parent = <HTMLInputElement>document.getElementById(`comment_parent`)
    let input_nonce = <HTMLInputElement>document.getElementById(`nonce`)
    let textarea_comment = <HTMLTextAreaElement>document.getElementById(`comment`)

    input_author.value = data.author
    input_email.value = data.email
    input_url.value = data.url
    input_comment_post_ID.value = String(data.comment_post_ID)
    input_comment_parent.value = String(data.comment_parent)
    input_nonce.value = data.nonce
    textarea_comment.value = data.comment
  }

  /**
   * reset comment form
   * needs to call in ListComments::nav_turn() and cancel_reply_callback()
   * @since 4.0.0
   * 
   * @param {boolean} keep keep the existing comment text?
   */
  public static reset_comment_form(keep: boolean = true) {
    let comment: string = keep ? (<HTMLTextAreaElement>document.getElementById(`comment`)).value : null
    // TODO: use from cookie
    let default_form: CommentForm = {
      'author': (<HTMLInputElement>document.getElementById(`author`)).value,
      'email': (<HTMLInputElement>document.getElementById(`email`)).value,
      'url': (<HTMLInputElement>document.getElementById(`url`)).value,
      'comment': comment,
      'comment_post_ID': Number((<HTMLInputElement>document.getElementById(`comment_post_ID`)).value),
      'comment_parent': 0,
      'nonce': (<HTMLInputElement>document.getElementById(`nonce`)).value
    }
    this.set_comment_form_value(default_form)

    let comment_form = document.querySelector(`#commentform`)
    let default_wrapper = document.querySelector(`.commetn-form-wrapper`)
    default_wrapper.appendChild(comment_form)
  }

  /**
   * listen retcomment comment form button
   * @since 4.0.0
   */
  public static reset_comment_form_button_listener() {

  }

  /**
   * creat comment item for response data
   * TODO: we can add a is_approved area
   * @return DocumentFragment
   */
  public static creat_comment_item(data: Data): DocumentFragment {
    let li: HTMLTemplateElement = document.querySelector('#comment-list-li-template')
    let li_clone: DocumentFragment = document.importNode(li.content, true)
    let comment = data

    li_clone.querySelector('.comment-item').setAttribute('id', `comment-${comment.comment_ID}`)
    li_clone.querySelector('.content').innerHTML = (comment.content ? comment.content : '').trim()
    li_clone.querySelector('.time').textContent = comment.date
    li_clone.querySelector('.name').textContent = comment.comment_author
    li_clone.querySelector('.avatar img').setAttribute('src', comment.comment_author_avatar)
    li_clone.querySelector('a.avatar').setAttribute('href', comment.url)
    li_clone.querySelector('a.name').setAttribute('href', comment.url)
    li_clone.querySelector('.location').textContent = comment.location

    li_clone.querySelector('.reply').remove()

    let like = (<HTMLElement>li_clone.querySelector('.like')),
      dislike = (<HTMLElement>li_clone.querySelector('.dislike'))
    like.style.display = 'none'
    dislike.style.display = 'none'

    return li_clone;
  }

  /**
   * Listener for reply button  `CreateComment.reply_to_listener()`
   * call after list build! Not in constructor!
   * show reload every time refresh list
   * @since 4.0.0
   */
  public static reply_to_listener() {
    let reply = document.querySelectorAll(`.reply`)
    for (let i = 0; i < reply.length; i++) {
      reply[i].addEventListener('click', this.reply_to_listener_callback, false)
    }
  }

  /**
   * callback of reply_to_listener
   * @since 4.0.0
   * @param MouseEvent event
   */
  public static reply_to_listener_callback(event: MouseEvent) {
    let element: Element = event['path'][0]
    let to_comment_id: number = Number(element.getAttribute('data-reply-to'))
    let target_place = <HTMLElement>document.querySelector(`#comment-${to_comment_id} .reply-form`)
    let comment_form = <HTMLElement>document.querySelector(`#commentform`)

    target_place.appendChild(comment_form)
    target_place.style.display = 'block'
    // now to set form data

    let form_data: CommentForm = {
      'author': (<HTMLInputElement>document.getElementById(`author`)).value,
      'email': (<HTMLInputElement>document.getElementById(`email`)).value,
      'url': (<HTMLInputElement>document.getElementById(`url`)).value,
      // TODO: get the reply to author name
      'comment': `reply to @${to_comment_id} ${(<HTMLTextAreaElement>document.getElementById(`comment`)).value}`,
      'comment_post_ID': Number((<HTMLInputElement>document.getElementById(`comment_post_ID`)).value),
      'comment_parent': to_comment_id,
      'nonce': (<HTMLInputElement>document.getElementById(`nonce`)).value
    }

    CreateComment.set_comment_form_value(form_data)

    // TODO: add a mirror (not actually a form, only need 
    //  to add a click listener to reset comment form) to 
    //  the default comment form place
  }

  /**
   * Listener for cancel reply button
   * @since 4.0.0
   */
  public static cancel_reply_listener() {

  }

  /**
   * Listener for submit button
   * @since 4.0.0
   */
  public submit_listener() {
    // add event listener to comment form
    //  - do else by submit_callback
    if (document.querySelector('#commentform')) {
      const form = document.querySelector('#commentform')
      form.addEventListener('submit', this.submit_callback.bind(this), false)
    }
  }

  /**
   * submit event callback
   * @since 4.0.0
   * @param {Event} event
   */
  public submit_callback(event: Event) {
    // prevent the default behavior to avoid a form submit to reload the page
    event.preventDefault()

    // get formdata
    // let element: Element = event['path'][0]
    this.author = (<HTMLInputElement>document.getElementById("author")).value
    this.email = (<HTMLInputElement>document.getElementById("email")).value
    this.url = (<HTMLInputElement>document.getElementById("url")).value
    this.comment = (<HTMLInputElement>document.getElementById("comment")).value
    this.comment_post_ID = Number((<HTMLInputElement>document.getElementById("comment_post_ID")).value)
    this.comment_parent = Number((<HTMLInputElement>document.getElementById("comment_parent")).value)
    this.nonce = (<HTMLInputElement>document.getElementById("nonce")).value

    // create a hack place:
    // save the root parent id in this.root_parent
    // then insert new item by root_parent in mutate_callback()
    // HINT: insert in the last li will not influent nav or collapse
    if (this.comment_parent === 0) {
      // is replying to a post directly
      this.root_parent = 0

    } else {
      // document.getElementById(`comment-${this.comment_parent}`)
      let parent: Element = document.querySelector(`#comment-${this.comment_parent}`).parentElement.parentElement

      if (parent.classList.contains('comment-item')) {
        // if the post replying to has a parent, that means, new one will be a child-child
        this.root_parent = Number(parent.getAttribute('id').substr(8))

      } else {
        // if the post replying to has a parent, that means, new one will be a child
        this.root_parent = this.comment_parent
      }
    }

    // mutation
    //  - do else by mutate_callback()
    let mutation = this.mutate()
  }

  /**
   * mutation callback
   * @since 4.0.0
   * @param {PostCallbackData} data mutation callback
   */
  public mutate_callback(dataJson: PostCallbackData) {
    // handle data
    let data: Data = dataJson.data.postComment
    console.log(data)

    if (!data.succeed) {
      this.error_handle(data)
      return;
    }

    // generate new element for data
    let data_ele: DocumentFragment = CreateComment.creat_comment_item(data)

    let ul: Element, lis: NodeListOf<Element>

    if (this.root_parent === 0) {
      ul = document.querySelector(`ul#comment-list-ul-root`)
      lis = document.querySelectorAll(`ul#comment-list-ul-root>li`)
    } else {
      ul = document.querySelector(`#comment-${this.root_parent} ul.comment-list-ul`)
      lis = document.querySelectorAll(`#comment-${this.root_parent} ul.comment-list-ul>li`)
    }

    let last_li = lis[lis.length - 1]
    if (lis.length > 0)
      last_li.parentElement.insertBefore(data_ele, last_li.nextSibling)
    else
      ul.appendChild(data_ele)

    // reset comment form
    CreateComment.reset_comment_form(false)


    // TODO: scroll page
    // TODO: also raise a message

  }

  /**
   * handle error in data, raise a error info
   * @since 4.0.0
   * @param {Data} data mutation callback
   */
  public error_handle(data: Data) {
    console.log(data.message)
  }

  private mutate() {
    const mutation = {
      mutation: mutateCreateComment,
      variables: {
        "input": {
          "clientMutationId": "PostComment",
          "author": this.author,
          "email": this.email,
          "url": this.url,
          "comment": this.comment,
          "comment_post_ID": this.comment_post_ID,
          "comment_parent": this.comment_parent,
          "_wp_unfiltered_html_comment": this.nonce
        }
      }
    }

    const client: ApoloMutate = new ApoloMutate(mutation, this.mutate_callback.bind(this))
    client.do()
  }
}