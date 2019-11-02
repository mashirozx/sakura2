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

    let scene = document.querySelector('#cover-img-container')
    let parallaxInstance = new Parallax(scene);

    let cover: {
        e: HTMLImageElement,
        w: number,
        h: number
    }

    cover.e = document.querySelector("#cover-img") as HTMLImageElement
    cover.w = cover.e.naturalWidth
    cover.h = cover.e.naturalHeight

    console.log(cover.w)
}