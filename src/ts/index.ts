//MDC按键波纹
import {MDCRipple} from '@material/ripple/index';
const ripple = new MDCRipple(document.querySelector('.foo-button'));

import hello from "./components/function";

let words: string[] = ["World", "Mashiro", "Yukishino"];

words.forEach((wordd: string) => {
  console.log(`${hello(wordd)}`);
});

console.log('hello 1');
console.log(`hello 2`);