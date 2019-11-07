/**
 * @description Sakura theme module
 * @author Mashiro
 * @since 19/10/31
 * @license MIT
 */

let scrollAction: {
    x: number,
    y: number,
    d: string
} = {
    x: undefined,
    y: undefined,
    d: undefined
}

/**
 * Detect window scroll direction
 * @param  {string}  direction  option: `Y`/`y` - horizontal; `X`/`x` - vertical
 * @return {string}             return window scroll direction
 */
export default function (direction: string) {
    if (scrollAction.x == undefined) {
        scrollAction.x = window.pageXOffset
        scrollAction.y = window.pageYOffset
    }
    let diffX = scrollAction.x - window.pageXOffset
    let diffY = scrollAction.y - window.pageYOffset
    if (direction == 'x' || direction == 'X' ) {
        if (diffX < 0) {
            scrollAction.d = 'right'
        } else if (diffX > 0) {
            scrollAction.d = 'left'
        }
    } else {
        if (diffY < 0) {
            scrollAction.d = 'down'
        } else if (diffY > 0) {
            scrollAction.d = 'up'
        }
    }
    scrollAction.x = window.pageXOffset
    scrollAction.y = window.pageYOffset
    return scrollAction.d
}