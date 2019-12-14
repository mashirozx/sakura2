import coverParallax from '../module/coverParallax'
import footerWave from '../module/footerWave'
import pageInit from '../page/init'

export default function pjaxReload() {
  if (window.location.pathname == "/") {
    console.log(`home!`)
  } else {
    console.log(`not home!`)
  }
  
  // footer wave color
  footerWave()

  // cover image parallax
  coverParallax()

  // page init (post/page/link...)
  pageInit()
}