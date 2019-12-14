import ShowCommentList from '../../classes/showCommentList'
import { CreateComment } from '../../classes/createComment'

export default async function () {
  let comment_list = document.getElementById("comment-list-ul-root")
  if (typeof (comment_list) !== 'undefined' && comment_list !== null) {
    const postId = Number(document.querySelector('#post-content').getAttribute('data-post-id'))
    let commentList = new ShowCommentList(postId, 10, 1)
  }

  let comment_form = document.getElementById("commentform")
  if (typeof (comment_form) !== 'undefined' && comment_form !== null) {
    let createComment = new CreateComment()
  }
}

