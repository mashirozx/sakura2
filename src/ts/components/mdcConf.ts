/**
 * Copyright 2019 Mashiro
 * @description material-components initial configuration
 * @author Mashiro
 * @license MIT
 */

import { MDCRipple } from '@material/ripple';
import { MDCTextField } from '@material/textfield';
import { MDCTopAppBar } from '@material/top-app-bar';
import { MDCChipSet } from "@material/list";

const Conf = [
    ['.mdc-top-app-bar', MDCTopAppBar],
    ['.mdc-text-field', MDCTextField],
    [
        [
            '.mdc-button',
            '.primary-action',
        ],
        MDCRipple
    ],
    ['.mdc-chip-set', MDCChipSet]
]

export default Conf