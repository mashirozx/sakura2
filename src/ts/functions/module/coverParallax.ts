import Parallax from 'parallax-js'

export default function coverParallax() {
  let coverImgContainer = <HTMLElement>document.querySelector(".parallax-wrapper")
  if (typeof (coverImgContainer) !== 'undefined' && coverImgContainer !== null) {
    let scene = document.querySelector('.parallax-wrapper')
    let parallaxInstance = new Parallax(scene);
  }
}