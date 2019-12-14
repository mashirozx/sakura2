import scrollDirection from "../util/scrollDirection"

/**
 * Site top bar handler when page scroll
 * @since 4.0.0
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