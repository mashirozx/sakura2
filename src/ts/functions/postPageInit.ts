import GetCommentList from '../utils/getCommentList'

export default async function () {
  if (document.querySelector('article').classList.contains('post-content')) {
    const postId = Number(document.querySelector('#post-content').getAttribute('data-post-id'))
    let commentList = new GetCommentList(1, 10, 1)
    
  }
}