import ApoloMutate from './graphql-mutate'
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

export class CreateComment {
  public author: string
  public email: string
  public url: string
  public comment: string
  public comment_post_ID: number
  public comment_parent: number
  public nonce: string

  /**
   * create new comment
   * @since 4.0.0
   * 
   * @param {CommentForm} commentForm
   */
  public constructor(commentForm:CommentForm) {
    this.author = commentForm.author
    this.email = commentForm.email
    this.url = commentForm.url
    this.comment = commentForm.comment
    this.comment_post_ID = commentForm.comment_post_ID
    this.comment_parent = commentForm.comment_parent
    this.nonce = commentForm.nonce
    this.main()
  }

  public mutate_callback(data) {
    console.log(data)
  }

  private main() {
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