/**
 * @description Index
 * @author Mashiro
 * @since 19/10/31
 */

import * as components from "./components/index"
//import * as modules from "./modules/index"

//TODO: move to ./particails
let componentsIni = components
//let modulesIni = modules

import scrollDirection from "./modules/scrollEvent"

window.onscroll = function () {
  let ele: HTMLElement = document.getElementById("nav-header")
  if (scrollDirection('y') == 'down') {
    ele.style.top = `-120px`
  }
  else if (scrollDirection('y') == 'up') {
    ele.style.top = `0px`
  }
}

let coverImageContainer: HTMLElement = document.getElementById("cover-img-container")
coverImageContainer.style.height = `${window.innerHeight}px`

import Parallax from 'parallax-js'
//let scene = document.getElementById('cover-img-container')
//let parallaxInstance = new Parallax(scene)

let ele: HTMLImageElement = document.getElementById("cover-img") as HTMLImageElement
let eleW: number = ele.naturalWidth
console.log(eleW)

