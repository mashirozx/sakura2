import vhCheck from 'vh-check'
import mdcInit from "../components/mdcInit"
import pjaxInit from '../components/pjaxInit'
import coverParallax from '../module/coverParallax'
import footerWave from '../module/footerWave'
import pageInit from '../page/init'

/**
 * Global init function
 * @since 4.0.0
 */
export default function init() {
  // fix vh issue on monile
  vhCheck()

  // mdc init
  mdcInit()

  // pjax init
  pjaxInit()
  
  /* below should also add to pjaxReload */

  // footer wave color
  footerWave()

  // cover image parallax
  coverParallax()

  // page init (post/page/link...)
  pageInit()
}