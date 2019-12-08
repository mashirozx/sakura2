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
  location: string
  level: number
  role: number
  like: number
  dislike: number
  child: string
  childPre: string
}

interface childPre {
  [index: number]: number;
  length: number;
  callee: childPreNode;
}

interface childPreNode {
  id: number
  name: string
  url: string
  avatar: string
  content: string
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

const createCommentChild = function (child: object): DocumentFragment {
  let newDiv = document.createElement("div");
  let newContent = document.createTextNode("Hi there and greetings!");
  newDiv.appendChild(newContent);
}

const pushCommentChild = function (childDiv: HTMLElement, child: [number?]): HTMLElement {
  return childDiv
}

const pushNewCommentItem = function (node: node) {
  let ul: HTMLElement = document.querySelector('#comment-list-ul'),
    li: HTMLTemplateElement = document.querySelector('#comment-list-li-template'),
    clone: DocumentFragment = document.importNode(li.content, true),
    mate: commentMate = node.mate,
    // child: [number?] = JSON.parse(mate.child),
    childPre: childPre = JSON.parse(mate.childPre)

  clone.querySelector('.content').innerHTML = node.content.trim()
  clone.querySelector('.time').textContent = node.date

  clone.querySelector('.name').textContent = mate.name
  clone.querySelector('.avatar img').setAttribute('src', mate.avatar)
  clone.querySelector('a.avatar').setAttribute('href', mate.url)
  clone.querySelector('a.name').setAttribute('href', mate.url)
  clone.querySelector('.location').textContent = mate.location
  clone.querySelector('.like .num').textContent = String(mate.like)
  clone.querySelector('.dislike .num').textContent = String(mate.dislike)

  let childDiv: HTMLElement = clone.querySelector('.child')
  if (childPre === undefined || childPre.length == 0) {
    // if has no child comment
    childDiv.remove()
  } else {
    // if has child
    childDiv.setAttribute('data-child', mate.child)
    let childContent: DocumentFragment = createCommentChild(childPre)
    childDiv.appendChild(childContent)
  }
  ul.appendChild(clone)
}

const getCommentDataCallback = function (data: object) {
  //single item data
  for (let edge: object in data.data.postBy.comments.edges) {
    const node: object = data.data.postBy.comments.edges[edge].node
    pushNewCommentItem(node)
  }
}

const main = async function () {
  const theQuery: getPostCommentByPostId = new getPostCommentByPostId(1, 10)
  const client: ApoloQuery = new ApoloQuery(theQuery.query, getCommentDataCallback)
  client.do()
}

export default main