/**
 * @description material-components initial
 * @author Mashiro
 * @since 19/11/1
 */
import { MDCRipple } from '@material/ripple/index'
import { MDCTextField } from '@material/textfield'
import { MDCTopAppBar } from '@material/top-app-bar'

export default function () {
    interface LooseObject {
        [key: string]: any
    }

    let MDC: LooseObject = {}

    const topAppBarElement = document.querySelector('.mdc-top-app-bar')
    const topAppBar = new MDCTopAppBar(topAppBarElement)

    // const textField = new MDCRipple(document.querySelector('.mdc-button'))
    // if(textField) const textField = new MDCTextField(document.querySelector('.mdc-text-field'))
}