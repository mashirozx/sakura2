/**
 * Copyright 2019 Mashiro
 * @description Main
 * @author Mashiro
 * @license MIT
 */

import coverImgIni from "./modules/coverImgInit"
import headerBarScrollHandler from "./modules/headerBarScrollHandler"
import mdcInit from "./components/mdcInit"


window.onscroll = function () {
  headerBarScrollHandler()
}

window.onload = function () {
  coverImgIni()
  mdcInit()

}