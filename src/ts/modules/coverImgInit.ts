/**
 * Copyright 2019 Mashiro
 * @description Sakura theme module
 * @author Mashiro
 * @license MIT
 */

import Parallax from 'parallax-js'

/**
 * Initial index cover image and image box.
 * Include Parallax box initial and `#cover-img-container` size initial.
 */
export default function () {
    let headerTopAfter = <HTMLElement>document.querySelector("#header-top-after")
    if (typeof (headerTopAfter) !== 'undefined' && headerTopAfter !== null) {
        headerTopAfter.style.height = `${window.innerHeight}px`
    }
    
    let coverImgContainer = <HTMLElement>document.querySelector("#cover-img-container")
    if (typeof (coverImgContainer) !== 'undefined' && coverImgContainer !== null) {
        coverImgContainer.style.height = `${window.innerHeight}px`

        interface LooseObject {
            [key: string]: any
        }

        /**
         * cover: `img#cover-img`
         */
        let coverImg: LooseObject = {}
        /**
         * mark: `figure#cover-img-container`
         */
        let coverBox: LooseObject = {}
        /**
         * layer: `div#img-view`
         */
        let coverView: LooseObject = {}

        coverImg.e = <HTMLImageElement>document.querySelector("#cover-img")
        coverImg.w = <number>coverImg.e.naturalWidth
        coverImg.h = <number>coverImg.e.naturalHeight

        coverBox.e = <HTMLImageElement>document.querySelector("#cover-img-container")
        coverBox.w = <number>coverBox.e.offsetWidth
        coverBox.h = <number>coverBox.e.offsetHeight

        coverView.e = <HTMLImageElement>document.querySelector("#img-view")

        coverBox.e.style.height = `${window.innerHeight}px`

        coverBox.f = (coverBox.w >= 1000 || coverBox.h >= 1000) ? 1000 : 500
        if (coverBox.w >= coverBox.h) {
            coverBox.i = coverBox.w / coverBox.f * 50;
            coverBox.y = coverBox.i;
            coverBox.x = coverBox.i * coverBox.w / coverBox.h;
        } else {
            coverBox.i = coverBox.h / coverBox.f * 50;
            coverBox.x = coverBox.i;
            coverBox.y = coverBox.i * coverBox.h / coverBox.w;
        }

        coverView.e.style.cssText = `
        width: ${coverBox.w + coverBox.x}px; 
        height: ${coverBox.h + coverBox.y}px; 
        margin-left: ${-0.5 * coverBox.x}px; 
        margin-top: ${-0.5 * coverBox.y}px`

        coverImg.e.style.cssText = `
        width: ${coverView.w + coverView.x}px;
        height: ${coverView.h + coverView.y}px`

        if (!coverImg.w) {
            coverImg.w = coverImg.e.offsetWidth
            coverImg.h = coverImg.e.offsetHeight;
        }

        coverImg._w = coverImg.e.parentElement.offsetWidth
        coverImg._h = coverImg.e.parentElement.offsetHeight
        coverImg.ratio = coverImg.h / coverImg.w

        if (coverImg._h / coverImg._w > coverImg.ratio) {
            coverImg.e.style.height = coverImg._h + 'px';
            coverImg.e.style.width = coverImg._h / coverImg.ratio + 'px';
        } else {
            coverImg.e.style.width = coverImg._w + 'px';
            coverImg.e.style.height = coverImg._w * coverImg.ratio + 'px';
        }

        coverImg.e.style.left = (coverImg._w - parseInt(coverImg.e.style.width)) / 2 + 'px';
        coverImg.e.style.top = (coverImg._h - parseInt(coverImg.e.style.height)) / 2 + 'px';

        let scene = document.querySelector('#cover-img-container')
        let parallaxInstance = new Parallax(scene);
    }
}