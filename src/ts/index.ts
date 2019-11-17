/**
 * Copyright 2019 Mashiro
 * @description Main
 * @author Mashiro
 * @license MIT
 */

// import coverImgIni from "./modules/coverImgInit"
import headerBarScrollHandler from "./modules/headerBarScrollHandler"
import mdcInit from "./components/mdcInit"
import Pjax from "pjax"
import getHexFilter from "./modules/hexFilter"
import Parallax from 'parallax-js'
import rgb2hex from "./modules/rgb2hex"
import vhCheck from 'vh-check'

window.onscroll = function () {
  headerBarScrollHandler()
}

// TODO: global configuration
// TODO: transparent before calculation been done!
// let themePrimaryColor = rgb2hex(window.getComputedStyle(document.querySelector('footer')).backgroundColor)
let themePrimaryColor = '#fcb8ab'
let themeColorFilter = getHexFilter(themePrimaryColor)

vhCheck()

let InitFun = function () {
  // coverImgIni()
  mdcInit()

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
}

window.onload = function () {
  InitFun()

  let pjax = new Pjax({
    elements: "a", // default is "a[href], form[action]"
    selectors: ["title", "#root"],
    cacheBust: true
  })

  function pjaxReload() {
    // console.log('pjax:complete')
    if (window.location.pathname == "/") {
      console.log(`home!`)
    } else {
      console.log(`not home!`)
    }
    InitFun()
  }
  document.addEventListener('pjax:complete', pjaxReload)
}