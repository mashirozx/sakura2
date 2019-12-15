import getHexFilter from '../util/hexFilter'
import rgb2hex from '../util/rgb2hex'

export default function footerWave() {
  // let themePrimaryColor = rgb2hex(window.getComputedStyle(document.querySelector('footer')).backgroundColor)
  // TODO: we'll use a global option object to get theme color
  let themePrimaryColor = '#fcb8ab'

  let themeColorFilter = getHexFilter(themePrimaryColor)

  let footerBefore = <HTMLElement>document.querySelector("#footer-before")
  if (typeof (footerBefore) !== 'undefined' && footerBefore !== null) {
    // TODO: set theme color function!
    footerBefore.style.filter = themeColorFilter
  }
}