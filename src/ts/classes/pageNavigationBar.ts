/**
 * page nav bar plugin
 * @since 4.0
 * @author Mashiro
 * @license MIT
 * @property {number} current
 * @property {number} total
 * @property {number[]} list  0 for ..., -1 for previous, -2 for next
 * @property {Element} dom    The DOM Element
 */
export default class PageNavigationBar {
  public current: number
  public total: number
  public list: number[]
  public dom: Element

  /**
   * page nav bar plugin
   * @since 4.0
   * @author Mashiro
   * @license MIT
   * @param {number} current  current page number
   * @param {number} total    total page number
   */
  public constructor(current: number, total: number) {
    this.current = current
    this.total = total
    this.list = []
    this.main()
    this.get_dom()
  }

  private new_ele(the_class: string, text: string, data: number): Element {

    let button: Element = document.createElement('button')
    button.classList.add('mdc-button')

    let ripple: Element = document.createElement('div')
    ripple.classList.add('mdc-button__ripple')

    let label: Element = document.createElement('span')
    label.classList.add('mdc-button__label')

    label.textContent = text
    button.classList.add(the_class)
    button.setAttribute('data-nav', String(data))

    button.appendChild(ripple)
    button.appendChild(label)

    return button
  }

  private get_dom() {
    let nav: Element = document.createElement('nav')
    nav.classList.add('page-navigation')

    let wrapper: Element = document.createElement('div')
    wrapper.classList.add('button-wrapper')

    for (let i in this.list) {
      if (this.list[i] === -1) {
        wrapper.appendChild(this.new_ele('previous', '« Previous', this.current - 1))
      }
      else if (this.list[i] === -2)
        wrapper.appendChild(this.new_ele('next', 'Next »', this.current + 1))
      else if (this.list[i] === 0)
        wrapper.appendChild(this.new_ele('ellipsis', '...', 0))
      else if (this.list[i] === this.current)
        wrapper.appendChild(this.new_ele('current', String(this.list[i]), this.list[i]))
      else
        wrapper.appendChild(this.new_ele('available', String(this.list[i]), this.list[i]))
    }

    nav.appendChild(wrapper)

    this.dom = nav
  }

  private main() {
    if (this.current > 1) this.list.push(-1)

    //before
    if (this.current < 5) {
      for (let i = 1; i <= this.current; i++) this.list.push(i)
    } else {
      this.list.push(1)
      this.list.push(0)
      this.list.push(this.current-2)
      this.list.push(this.current-1)
      this.list.push(this.current)
    }

    //after
    if ((this.total - this.current + 1) < 5) {
      for (let i = this.current + 1; i <= this.total; i++) this.list.push(i)
    } else {
      this.list.push(this.current + 1)
      this.list.push(this.current + 2)
      this.list.push(0)
      this.list.push(this.total)
    }

    if (this.current < this.total) this.list.push(-2)
  }
}