let scrollAction = {x: undefined, y: undefined}, scrollDirection

export default function () {
  if (typeof scrollAction.x == 'undefined') {
      scrollAction.x = window.pageXOffset
      scrollAction.y = window.pageYOffset
  }
  let diffX = scrollAction.x - window.pageXOffset
  let diffY = scrollAction.y - window.pageYOffset
  if (diffX < 0) {
      // Scroll right
      scrollDirection = 'right'
  } else if (diffX > 0) {
      // Scroll left
      scrollDirection = 'left'
  } else if (diffY < 0) {
      // Scroll down
      scrollDirection = 'down'
  } else if (diffY > 0) {
      // Scroll up
      scrollDirection = 'up'
  } else {
      // First scroll event
  }
  scrollAction.x = window.pageXOffset
  scrollAction.y = window.pageYOffset
  return scrollDirection
}

// export class scrollDirection {
//   scrollActionX: any
//   scrollActionY: any
//   scrollDirection: string
//   constructor() {
//       this.scrollActionX = undefined
//       this.scrollActionY = undefined
//   }
//   scrollDrictionX() {
//     if (typeof this.scrollActionX == 'undefined') {
//       this.scrollActionX = window.pageXOffset
//     }
//     if (this.scrollActionX > window.pageXOffset) {
//         // Scroll right
//         this.scrollDirection = 'right'
//     } else {
//         // Scroll left
//         this.scrollDirection = 'left'
//     }
//     this.scrollActionX = window.pageXOffset
//     return this.scrollDirection
//   }
//   scrollDrictionY() {
//     if (typeof this.scrollActionY == 'undefined') {
//       this.scrollActionY = window.pageYOffset
//     }
//     if (this.scrollActionY > window.pageYOffset) {
//         // Scroll right
//         this.scrollDirection = 'down'
//     } else {
//         // Scroll left
//         this. scrollDirection = 'up'
//     }
//     this.scrollActionY = window.pageYOffset
//   }
// }