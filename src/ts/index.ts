/**
 * @description Index
 * @author Mashiro
 * @since 19/10/31
 */

import * as components from "./components/index"
//import * as modules from "./modules/index"

//todo remove to particails
let componentsIni = components
//let modulesIni = modules

import scrollDirection from "./modules/scrollEvent"

window.onscroll = function(){
  //console.log(scrollDirection())
  if(scrollDirection() == 'down'){
    (<HTMLElement>document.getElementById("nav-header")).style.top = `-120px`
  }
  else if(scrollDirection() == 'up'){
    (<HTMLElement>document.getElementById("nav-header")).style.top = `0px`
  }
}

//(<HTMLElement>document.getElementById("img-container")).style.height =  `${window.innerHeight}px`