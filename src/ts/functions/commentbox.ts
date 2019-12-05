import { getPostCommentByPostId } from '../utils/graphql'
import ApolloClient from 'apollo-boost'

const getCommentData = function (callback: Function) {
  const theCommentQuery: getPostCommentByPostId = new getPostCommentByPostId(1, 5)
  const client: ApolloClient = new ApolloClient()
  client.query(theCommentQuery.query)
    .then(data => callback(data))
    .catch(error => console.log(error))
}

const pushNewCommentItem = function (data: object) {
  let li = document.querySelector('#comment-list-li-template'),
    ul = document.querySelector('#comment-list-ul')

  li.content.querySelector('.name').textContent = data.name
  li.content.querySelector('.content').innerHTML = data.content.trim()

  let clone = document.importNode(li.content, true)
  ul.appendChild(clone)
}

const getCommentDataCallback = function (data: object) {
  //single item data
  interface CommentItem {
    name: string,
    content: string
  }

  for (let edge: object in data.data.postBy.comments.edges) {
    let node: object = data.data.postBy.comments.edges[edge].node
    let stata: CommentItem = {
      name: node.author.name,
      content: node.content
    }
    pushNewCommentItem(stata)
  }
}

const main = async function () {
  getCommentData(getCommentDataCallback)
  // dev(getCommentDataCallback)
}

export default main

const dev = function (callback: Function) {
  const data: object = {
    "data": {
      "postBy": {
        "id": "cG9zdDox",
        "postId": 1,
        "comments": {
          "edges": [{
            "node": {
              "date": "2019-12-05 15:15:21",
              "agent": "Mozilla\/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit\/537.36 (KHTML, like Gecko) Chrome\/78.0.3904.108 Safari\/537.36",
              "content": "<p>dsgssdg<\/p>\n",
              "commentId": 20,
              "author": {
                "email": "adadam@qq.com",
                "name": "mashiro",
                "url": null,
                "__typename": "User"
              },
              "authorIp": "101.87.249.108",
              "__typename": "Comment",
              "children": {
                "nodes": [{
                  "date": "2019-12-05 15:30:27",
                  "agent": "Mozilla\/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit\/537.36 (KHTML, like Gecko) Chrome\/78.0.3904.108 Safari\/537.36",
                  "content": "<p>re:fsadgfbad<\/p>\n",
                  "commentId": 24,
                  "author": {
                    "email": "adadam@qq.com",
                    "name": "mashiro",
                    "url": null,
                    "__typename": "User"
                  },
                  "authorIp": "101.87.249.108",
                  "__typename": "Comment",
                  "children": {
                    "nodes": [],
                    "__typename": "CommentToCommentConnection"
                  }
                }, {
                  "date": "2019-12-05 15:30:19",
                  "agent": "Mozilla\/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit\/537.36 (KHTML, like Gecko) Chrome\/78.0.3904.108 Safari\/537.36",
                  "content": "<p>re:24325<\/p>\n",
                  "commentId": 23,
                  "author": {
                    "email": "adadam@qq.com",
                    "name": "mashiro",
                    "url": null,
                    "__typename": "User"
                  },
                  "authorIp": "101.87.249.108",
                  "__typename": "Comment",
                  "children": {
                    "nodes": [],
                    "__typename": "CommentToCommentConnection"
                  }
                }, {
                  "date": "2019-12-05 15:29:56",
                  "agent": "Mozilla\/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit\/537.36 (KHTML, like Gecko) Chrome\/78.0.3904.108 Safari\/537.36",
                  "content": "<p>reply233<\/p>\n",
                  "commentId": 21,
                  "author": {
                    "email": "adadam@qq.com",
                    "name": "mashiro",
                    "url": null,
                    "__typename": "User"
                  },
                  "authorIp": "101.87.249.108",
                  "__typename": "Comment",
                  "children": {
                    "nodes": [{
                      "date": "2019-12-05 15:30:09",
                      "agent": "Mozilla\/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit\/537.36 (KHTML, like Gecko) Chrome\/78.0.3904.108 Safari\/537.36",
                      "content": "<p>re:re:2333<\/p>\n",
                      "commentId": 22,
                      "author": {
                        "email": "adadam@qq.com",
                        "name": "mashiro",
                        "url": null,
                        "__typename": "User"
                      },
                      "authorIp": "101.87.249.108",
                      "__typename": "Comment",
                      "children": {
                        "nodes": [],
                        "__typename": "CommentToCommentConnection"
                      }
                    }],
                    "__typename": "CommentToCommentConnection"
                  }
                }],
                "__typename": "CommentToCommentConnection"
              }
            },
            "__typename": "PostToCommentConnectionEdge"
          }, {
            "node": {
              "date": "2019-12-05 15:15:18",
              "agent": "Mozilla\/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit\/537.36 (KHTML, like Gecko) Chrome\/78.0.3904.108 Safari\/537.36",
              "content": "<p>asfadsfgasg<\/p>\n",
              "commentId": 19,
              "author": {
                "email": "adadam@qq.com",
                "name": "mashiro",
                "url": null,
                "__typename": "User"
              },
              "authorIp": "101.87.249.108",
              "__typename": "Comment",
              "children": {
                "nodes": [],
                "__typename": "CommentToCommentConnection"
              }
            },
            "__typename": "PostToCommentConnectionEdge"
          }, {
            "node": {
              "date": "2019-12-05 15:15:15",
              "agent": "Mozilla\/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit\/537.36 (KHTML, like Gecko) Chrome\/78.0.3904.108 Safari\/537.36",
              "content": "<p>asfasfas<\/p>\n",
              "commentId": 18,
              "author": {
                "email": "adadam@qq.com",
                "name": "mashiro",
                "url": null,
                "__typename": "User"
              },
              "authorIp": "101.87.249.108",
              "__typename": "Comment",
              "children": {
                "nodes": [],
                "__typename": "CommentToCommentConnection"
              }
            },
            "__typename": "PostToCommentConnectionEdge"
          }, {
            "node": {
              "date": "2019-12-05 15:15:12",
              "agent": "Mozilla\/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit\/537.36 (KHTML, like Gecko) Chrome\/78.0.3904.108 Safari\/537.36",
              "content": "<p>safassfs<\/p>\n",
              "commentId": 17,
              "author": {
                "email": "adadam@qq.com",
                "name": "mashiro",
                "url": null,
                "__typename": "User"
              },
              "authorIp": "101.87.249.108",
              "__typename": "Comment",
              "children": {
                "nodes": [],
                "__typename": "CommentToCommentConnection"
              }
            },
            "__typename": "PostToCommentConnectionEdge"
          }, {
            "node": {
              "date": "2019-12-05 15:15:08",
              "agent": "Mozilla\/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit\/537.36 (KHTML, like Gecko) Chrome\/78.0.3904.108 Safari\/537.36",
              "content": "<p>adfasf<\/p>\n",
              "commentId": 16,
              "author": {
                "email": "adadam@qq.com",
                "name": "mashiro",
                "url": null,
                "__typename": "User"
              },
              "authorIp": "101.87.249.108",
              "__typename": "Comment",
              "children": {
                "nodes": [],
                "__typename": "CommentToCommentConnection"
              }
            },
            "__typename": "PostToCommentConnectionEdge"
          }],
          "pageInfo": {
            "endCursor": "YXJyYXljb25uZWN0aW9uOjE2",
            "hasNextPage": true,
            "hasPreviousPage": false,
            "startCursor": "YXJyYXljb25uZWN0aW9uOjIw",
            "__typename": "WPPageInfo"
          },
          "__typename": "PostToCommentConnection"
        },
        "__typename": "Post"
      }
    }
  }
  callback(data)
}