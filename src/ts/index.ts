/**
 * Copyright 2019 Mashiro
 * @description Main
 * @author Mashiro
 * @license MIT
 */

import coverImgIni from "./modules/coverImgInit"
import headerBarScrollHandler from "./modules/headerBarScrollHandler"
import mdcInit from "./components/mdcInit"
import Pjax from "pjax"
import getHexFilter from "./modules/hexFilter"

window.onscroll = function () {
  headerBarScrollHandler()
}

// TODO: global configuration
// TODO: transparent before calculation been done!
let themeColorFilter = getHexFilter('#fcb8ab')

let InitFun = function () {
  coverImgIni()
  mdcInit()
  
  let footerBefore = <HTMLElement>document.querySelector("#footer-before")
  if (typeof (footerBefore) !== 'undefined' && footerBefore !== null) {
    // TODO: set theme color function!
    footerBefore.style.filter = themeColorFilter
  }
}

window.onload = function () {
  InitFun()

  let pjax = new Pjax({
    elements: "a", // default is "a[href], form[action]"
    selectors: ["title", ".root"],
    cacheBust: true
  })

  function pjaxReload() {
    console.log('pjax:complete')
    if (window.location.pathname == "/") {
      console.log(`home!`)
    } else {
      console.log(`not home!`)
    }
    InitFun()
  }
  document.addEventListener('pjax:complete', pjaxReload)
}