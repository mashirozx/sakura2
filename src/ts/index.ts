import onloadInit from './functions/event/onloadInit'
import headerBarScrollHandler from "./functions/module/headerBarScrollHandler"

window.onload = function () {
  onloadInit()
}

window.onscroll = function () {
  headerBarScrollHandler()
}