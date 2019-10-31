//MDC按键波纹
import {MDCRipple} from '@material/ripple/index';
const ripple = new MDCRipple(document.querySelector('.mdc-button'));

import {MDCTextField} from '@material/textfield';
const textField = new MDCTextField(document.querySelector('.mdc-text-field'));

const username = new MDCTextField(document.querySelector('.username'));
const password = new MDCTextField(document.querySelector('.password'));

import hello from "./components/function";

let words: string[] = ["World", "Mashiro", "Yukishino"];

words.forEach((wordd: string) => {
  console.log(`${hello(wordd)}`);
});

console.log('hello 1');
console.log(`hello 2`);
