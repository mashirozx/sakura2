import commentInit from '../module/commentInit'

export default async function () {
  if (document.querySelector('article').classList.contains('post-content')) {
    commentInit()
  }
}