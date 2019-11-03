/**
 * Copyright 2019 Mashiro
 * @description material-components initial handler
 * @author Mashiro
 * @license MIT
 */
import mdcConf from "./mdcConf"

const Conf = mdcConf
export default function () {
    /* See https://git.io/JegHJ */
    let components = []
    for (const i of Conf) {
        if (typeof (i[0]) == 'string') {
            console.log(i)
            const component = i[0]
            const constructor = i[1]
            components.map.call(document.querySelectorAll(component), function (e: any) {
                return new constructor(e)
            })
        } else if (typeof (i[0]) == 'object') {
            const component = i[0].join(',')
            const constructor = i[1]
            components.map.call(document.querySelectorAll(component), function (e: any) {
                return new constructor(e)
            })
        }
    }
}