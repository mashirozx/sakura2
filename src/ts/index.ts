import onloadInit from './functions/event/onloadInit'
import headerBarScrollHandler from './functions/module/headerBarScrollHandler'

window.onload = function () {
  onloadInit()
}

// TODO: this should be container onscroll event, and can be a class
// window.onscroll = function () {
//   headerBarScrollHandler()
// }