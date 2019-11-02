/**
 * @description Sakura theme module
 * @author Mashiro
 * @since 19/10/31
 * @license MIT
 */

import Parallax from 'parallax-js'

/**
 * Initial index cover image and image box.
 * Include Parallax box initial and `#cover-img-container` size initial.
 */
export default function () {
    let coverImageContainer: HTMLElement = document.querySelector("#cover-img-container")
    coverImageContainer.style.height = `${window.innerHeight}px`

    interface LooseObject {
        [key: string]: any
    }

    let coverImg: LooseObject = {}
    let coverView: LooseObject = {}

    coverImg.e = <HTMLImageElement>document.querySelector("#cover-img") as HTMLImageElement
    coverImg.w = <number>cover.e.naturalWidth
    coverImg.h = <number>cover.e.naturalHeight

    coverView=<HTMLImageElement>document.querySelector("#cover-img") as HTMLImageElement
    // Parallax view box
    cover.e.style.height = `${window.innerHeight}px`



    let scene = document.querySelector('#cover-img-container')
    let parallaxInstance = new Parallax(scene);
}