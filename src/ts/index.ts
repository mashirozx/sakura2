/**
 * Copyright 2019 Mashiro
 * @description Main
 * @author Mashiro
 * @license MIT
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