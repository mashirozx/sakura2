import commentBoxInit from './commentbox'

export default async function () {
  if (!document.querySelector('article').classList.contains('markdown')) {
    return
  }
  commentBoxInit()
}