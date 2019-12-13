import ShowCommentList from '../utils/showCommentList'
import { CreateComment, CommentForm } from '../utils/createComment'

export default async function () {
  if (document.querySelector('article').classList.contains('post-content')) {
    const postId = Number(document.querySelector('#post-content').getAttribute('data-post-id'))
    let commentList = new ShowCommentList(postId, 10, 1)

    let form: CommentForm = {
      'author': 'Kirito',
      'email': 'moezhx@outlook.com',
      'url': 'https://moezx.cc',
      'comment': `TS test ${Math.random()}`,
      'comment_post_ID': 1,
      'comment_parent': 0,
      'nonce': ''
    }
    // let createComment = new CreateComment(form)
  }
}