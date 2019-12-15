import vhCheck from 'vh-check'
import mdcInit from "../components/mdcInit"
import pjaxInit from '../components/pjaxInit'
import coverParallax from '../module/coverParallax'
import footerWave from '../module/footerWave'
import pageInit from '../page/init'
import drewer from '../../classes/drawer'

/**
 * Global init function
 * @since 4.0.0
 */
export default function init() {
  // fix vh issue on monile
  vhCheck()

  // pjax init
  pjaxInit()

  // toggle drawer
  drewer.drawer_toggle()
  
  /* below should also add to pjaxReload */

  // mdc init
  mdcInit()

  // footer wave color
  footerWave()

  // cover image parallax
  coverParallax()

  // page init (post/page/link...)
  pageInit()
}