/**
 * Create a snackbar
 * @since 4.0.0
 * 
 * @param {string} text 
 * @param {number} time Optional. Time to auto close, default 5 seconds, if <=0 won't auto close.
 * @param {boolean} leading Optional. Show in center
 * @param {boolean} stacked Optional. Positions the action button/icon below the label instead of alongside it.
 * @param {string} button Optional. Text on the button.
 * @param {Function} callkack Optional. A callback function for the button click. 
 * @param {boolen} close Optional. Show the close icon.
 */
export default function snackbar(
  text: string,
  time: number = 6,
  center: boolean = false,
  stacked: boolean = false,
  button: string = null,
  callback: Function = null,
  close: boolean = true
) {
  let ele = document.getElementById('snackbar')
  // mdc-snackbar--leading
  // mdc-snackbar--stacked
  // mdc-snackbar--open

  // init
  ele.classList.remove('mdc-snackbar--open')
  ele.classList.remove('mdc-snackbar--leading')
  ele.classList.remove('mdc-snackbar--stacked')
  document.getElementById('snackbar-button').style.display = 'none'
  document.getElementById('snackbar-close').style.display = 'none'

  // raise new
  document.getElementById('snackbar-text').innerHTML = text.trim()

  if (!center) {
    ele.classList.add('mdc-snackbar--leading')
  }

  if (stacked) {
    ele.classList.add('mdc-snackbar--stacked')
  }

  if (button) {
    document.getElementById('snackbar-label').innerText = button
    document.getElementById('snackbar-button').style.display = 'block'

    if (callback) {
      document.getElementById('snackbar-close').addEventListener('click', callback())
    }
  }

  if (close) {
    document.getElementById('snackbar-close').style.display = 'inline-block'
    document.getElementById('snackbar-close').addEventListener('click', () => {
      ele.classList.remove('mdc-snackbar--open')
    })
  }

  ele.classList.add('mdc-snackbar--open')

  let timeout = null

  if (time > 0 || !close) {
    timeout = window.setTimeout(() => {
      ele.classList.remove('mdc-snackbar--open')
    }, time * 1000)
  }
}