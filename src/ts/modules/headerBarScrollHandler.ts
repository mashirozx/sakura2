/**
 * @description Sakura theme module
 * @author Mashiro
 * @since 19/10/31
 * @license MIT
 */

import scrollDirection from "./scrollDirection"

/**
 * Site top bar handler when page scroll
 */
export default function () {
    let ele: HTMLElement = document.querySelector("#nav-header")
    if (scrollDirection('y') == 'down') {
        ele.style.top = `-120px`
    }
    else if (scrollDirection('y') == 'up') {
        ele.style.top = `0px`
    }
}