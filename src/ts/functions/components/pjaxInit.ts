import Pjax from "pjax"
import PjaxReload from "../event/pjaxReload"

export default function pjaxInit() {
  let pjax = new Pjax({
    elements: "a", // default is "a[href], form[action]"
    selectors: ["title", "#root"],
    cacheBust: true
  })
  document.addEventListener('pjax:complete', PjaxReload)
}