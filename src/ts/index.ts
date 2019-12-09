/**
 * Copyright 2019 Mashiro
 * @description Main
 * @author Mashiro
 * @license MIT
 */

import headerBarScrollHandler from "./modules/headerBarScrollHandler"
import mdcInit from "./components/mdcInit"
import Pjax from "pjax"
import getHexFilter from "./modules/hexFilter"
import Parallax from 'parallax-js'
import rgb2hex from "./modules/rgb2hex"
import vhCheck from 'vh-check'
import postPageInit from './functions/postPageInit'

let GlobalInit = function () {
  // TODO: global configuration
  // TODO: transparent before calculation been done!
  // let themePrimaryColor = rgb2hex(window.getComputedStyle(document.querySelector('footer')).backgroundColor)
  let themePrimaryColor = '#fcb8ab'
  let themeColorFilter = getHexFilter(themePrimaryColor)
  vhCheck()
  mdcInit()
  postPageInit()

  let coverImgContainer = <HTMLElement>document.querySelector(".parallax-wrapper")
  if (typeof (coverImgContainer) !== 'undefined' && coverImgContainer !== null) {
    let scene = document.querySelector('.parallax-wrapper')
    let parallaxInstance = new Parallax(scene);
  }

  let footerBefore = <HTMLElement>document.querySelector("#footer-before")
  if (typeof (footerBefore) !== 'undefined' && footerBefore !== null) {
    // TODO: set theme color function!
    footerBefore.style.filter = themeColorFilter
  }

  let pjax = new Pjax({
    elements: "a", // default is "a[href], form[action]"
    selectors: ["title", "#root"],
    cacheBust: true
  })
  document.addEventListener('pjax:complete', PjaxReload)
}

let PjaxReload = function () {
  // console.log('pjax:complete')
  if (window.location.pathname == "/") {
    console.log(`home!`)
  } else {
    console.log(`not home!`)
  }
  GlobalInit()
}

window.onload = function () {
  GlobalInit()
}

window.onscroll = function () {
  headerBarScrollHandler()
}