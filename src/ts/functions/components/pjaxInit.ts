import Pjax from "pjax"
import PjaxReload from "../event/pjaxReload"


/**
 * TODO: rewrite is to a class
 */
export default function pjaxInit() {
  let pjax = new Pjax({
    elements: "a", // default is "a[href], form[action]"
    selectors: ["title", "#main-content"],
    cacheBust: true
  })
  document.addEventListener('pjax:complete', PjaxReload)

  // listener form drawer items
  let lis = document.querySelectorAll('.drawer-items')
  for (let i = 0; i < lis.length; i++) {
    lis[i].addEventListener('click', (event) => {
      event.preventDefault()
      let href = (<HTMLElement>event.target).getAttribute('href')
      pjax.loadUrl(href)
      console.log(href)
    })
  }
}