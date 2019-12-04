import { getPostCommentByPostId } from '../utils/graphql'

/**
 * Site top bar handler when page scroll
 */
export default function () {
  if (!document.querySelector('article').classList.contains('markdown')) {
    return
  }
  let theComment = new getPostCommentByPostId(1, 5)
  console.log(theComment.query())
  console.log('test')
}