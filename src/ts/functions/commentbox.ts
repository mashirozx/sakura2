import { ApoloQuery, getPostCommentByPostId } from '../utils/graphql'

interface node {
  date: string
  content: string
  commentId: number
  mate: commentMate
}

interface commentMate {
  name: string
  url: string
  avatar: string
  ua: string
  date: string
  location: string
  level: number
  role: number
  like: number
  dislike: number
  child: string
  childPre: string
}

interface childPre {
  [index: number]: childPreNode
}

interface childPreNode {
  id: number
  name: string
  url: string
  avatar: string
  content: string
  date: string
  ua: string
  location: string
  level: number
  role: number
  like: number
  dislike: number
  child: string
  childPre: string
  parent: number
}

const createCommentChild = function (childPre: childPre): Element {
  // create a div named .child-pre
  let childPreviev: Element = document.createElement('div')
  childPreviev.classList.add('child-pre')

  // loop to append preview
  for (let i in childPre) {
    let li: HTMLTemplateElement = document.querySelector('#comment-child-li-template'),
      clone: DocumentFragment = document.importNode(li.content, true),
      data = childPre[i]

    clone.querySelector('.content').innerHTML = data.content.trim()
    clone.querySelector('.time').textContent = data.date
    clone.querySelector('.name').textContent = data.name
    clone.querySelector('.avatar img').setAttribute('src', data.avatar)
    clone.querySelector('a.avatar').setAttribute('href', data.url)
    clone.querySelector('a.name').setAttribute('href', data.url)
    clone.querySelector('.location').textContent = data.location
    clone.querySelector('.like .num').textContent = String(data.like)
    clone.querySelector('.dislike .num').textContent = String(data.dislike)

    childPreviev.appendChild(clone)
  }

  return childPreviev
}

// push comment item li to the ul
const pushNewCommentItem = function (node: node) {
  let ul: HTMLElement = document.querySelector('#comment-list-ul'),
    li: HTMLTemplateElement = document.querySelector('#comment-list-li-template'),
    clone: DocumentFragment = document.importNode(li.content, true),
    mate: commentMate = node.mate,
    child: [number?] = JSON.parse(mate.child),
    childPre: childPre = JSON.parse(mate.childPre)

  clone.querySelector('.content').innerHTML = node.content.trim()
  clone.querySelector('.time').textContent = mate.date
  clone.querySelector('.name').textContent = mate.name
  clone.querySelector('.avatar img').setAttribute('src', mate.avatar)
  clone.querySelector('a.avatar').setAttribute('href', mate.url)
  clone.querySelector('a.name').setAttribute('href', mate.url)
  clone.querySelector('.location').textContent = mate.location
  clone.querySelector('.like .num').textContent = String(mate.like)
  clone.querySelector('.dislike .num').textContent = String(mate.dislike)

  let childDiv: HTMLElement = clone.querySelector('.child')
  if (child === undefined || child.length == 0) {
    // if has no child comment
    childDiv.remove()
  } else {
    // if has child
    let childContent: Element = createCommentChild(childPre)

    // add collapse
    if (child.length > 3) {
      let collapse: Element = document.createElement('div'),
        collapseText: string = `<strong>${child.length}</strong> replies in total, \
          <span class="open" data-child="${mate.child}">click to view</span>`

      collapse.classList.add('child-collapse')
      collapse.innerHTML = collapseText.trim()
      childContent.appendChild(collapse)
    }
    childDiv.appendChild(childContent)
  }
  ul.appendChild(clone)
}

const getCommentDataCallback = function (data: object) {
  //single item data
  for (let edge: object in data.data.postBy.comments.edges) {
    const node: node = data.data.postBy.comments.edges[edge].node
    pushNewCommentItem(node)
  }
}

const main = async function () {
  const theQuery: getPostCommentByPostId = new getPostCommentByPostId(1, 10)
  const client: ApoloQuery = new ApoloQuery(theQuery.query, getCommentDataCallback)
  client.do()
}

export default main