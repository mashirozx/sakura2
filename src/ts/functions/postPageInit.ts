import GetCommentList from '../utils/getCommentList'

export default async function () {
  if (document.querySelector('article').classList.contains('post-content')) {
    let commentList = new GetCommentList()
    const postId = Number(document.querySelector('#post-content').getAttribute('data-post-id'))
    commentList.do(postId, 10)
  }
}