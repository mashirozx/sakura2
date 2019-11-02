/**
 * @description Index
 * @author Mashiro
 * @since 19/10/31
 */

import * as components from "./components/index"
import coverImgIni from "./modules/coverImgIni"
import headerBarScrollHandler from "./modules/headerBarScrollHandler"

//TODO: rewrite call method
let componentsIni = components

window.onscroll = function () {
  headerBarScrollHandler()
}

window.onload = function () {
  coverImgIni()
}