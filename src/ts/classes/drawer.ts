export default class Drewer {
  public constructor() {

  }

  public static drawer_toggle() {
    let body = document.querySelector('body')
    let button = document.getElementById('toggle-drawer')

    button.addEventListener('click', () => {
      body.classList.toggle('show-drawer');
    })
  }
}