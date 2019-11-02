/**
 * @description Index
 * @author Mashiro
 * @since 19/10/31
 */

import coverImgIni from "./modules/coverImgIni"
import headerBarScrollHandler from "./modules/headerBarScrollHandler"
import MDCHandler from "./components/MDCHandler"

window.onscroll = function () {
  headerBarScrollHandler()
}

window.onload = function () {
  coverImgIni()
  MDCHandler()
}