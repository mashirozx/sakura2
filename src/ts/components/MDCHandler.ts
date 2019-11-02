/**
 * @description material-components initial
 * @author Mashiro
 * @since 19/11/1
 */
import { MDCRipple } from '@material/ripple'
import { MDCTextField } from '@material/textfield'
import { MDCTopAppBar } from '@material/top-app-bar'

export default function () {
    // const textField = new MDCTextField(document.querySelector('.mdc-text-field'))
    
    //const ripple = new MDCRipple(document.querySelector('.mdc-button'))
    MDCRipple.attachTo(document.querySelector('.demo-card__primary-action'))
    MDCRipple.attachTo(document.querySelector('.mdc-button'))
    
    // const topAppBar = new MDCTopAppBar(document.querySelector('.mdc-top-app-bar'))

    const textField = [].map.call(document.querySelectorAll('.mdc-text-field'), function (el) {
        return new MDCTextField(el)
    })
}