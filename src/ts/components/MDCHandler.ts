/**
 * Copyright 2019 Mashiro
 * @description material-components initial
 * @author Mashiro
 * @license MIT
 */

import { MDCRipple } from '@material/ripple'
import { MDCTextField } from '@material/textfield'
import { MDCTopAppBar } from '@material/top-app-bar'

export default function () {
    /* See https://git.io/JegHJ */
    /* use once (single <HTMLElement>) */
    // MDCRipple.attachTo(document.querySelector('.mdc-button'))
    // const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'))

    /* use to all (map <NodeList>) */
    // for several classes
    const rippleList = []
    rippleList.push('.mdc-button','.demo-card__primary-action', ".something")
    const mdcRipple = [].map.call(document.querySelectorAll(rippleList.join(',')), function (e: any) {
        return new MDCRipple(e)
    })

    // for specified class
    const topAppBar = [].map.call(document.querySelectorAll('.mdc-top-app-bar'), function (e: any) {
        return new MDCTopAppBar(e)
    })
    const textField = [].map.call(document.querySelectorAll('.mdc-text-field'), function (e: any) {
        return new MDCTextField(e)
    })
}