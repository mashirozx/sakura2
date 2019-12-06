import { getPostCommentByPostId } from '../utils/graphql'
import ApolloClient from 'apollo-boost'

const getCommentData = function (callback: Function) {
  const theCommentQuery: getPostCommentByPostId = new getPostCommentByPostId(1, 5)
  const client: ApolloClient = new ApolloClient()
  client.query(theCommentQuery.query)
    .then(data => callback(data))
    .catch(error => console.log(error))
}

const pushNewCommentItem = function (node: object) {
  let li = document.querySelector('#comment-list-li-template'),
    ul = document.querySelector('#comment-list-ul')

  li.content.querySelector('.content').innerHTML = node.content.trim()
  li.content.querySelector('.time').textContent = node.date

  li.content.querySelector('.name').textContent = node.mate.name
  li.content.querySelector('.avatar img').setAttribute('src', node.mate.avatar)
  li.content.querySelector('a.avatar').setAttribute('href', node.mate.url)
  li.content.querySelector('a.name').setAttribute('href', node.mate.url)
  li.content.querySelector('.location').textContent = node.mate.location
  li.content.querySelector('.like .num').textContent = node.mate.like
  li.content.querySelector('.dislike .num').textContent = node.mate.dislike

  const clone = document.importNode(li.content, true)
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
              "date": "2019-12-06 12:55:17",
              "content": "<p>test \u4e2d\u6587<\/p>\n",
              "commentId": 26,
              "mate": {
                "name": "\u5abd`\u5979\u5a87\u786a",
                "url": "https:\/\/2heng.xin",
                "avatar": "https:\/\/secure.gravatar.com\/avatar\/8901d7fe1c34079b81d15b96fc5d933d?s=96&d=mm&r=g",
                "ua": "Chrome 70 Windows 10",
                "location": "Shanghai, China",
                "level": 6,
                "role": 9,
                "like": 100,
                "dislike": 10,
                "__typename": "CommentMate"
              },
              "__typename": "Comment",
              "children": {
                "nodes": [],
                "__typename": "CommentToCommentConnection"
              }
            },
            "__typename": "PostToCommentConnectionEdge"
          }, {
            "node": {
              "date": "2019-12-05 15:15:21",
              "content": "<p>dsgssdg<\/p>\n",
              "commentId": 20,
              "mate": {
                "name": "mashiro\u4e2d\u6587",
                "url": "",
                "avatar": "https:\/\/secure.gravatar.com\/avatar\/cd2b3a164c977539712929f66cad335c?s=96&d=mm&r=g",
                "ua": "Chrome 70 Windows 10",
                "location": "Shanghai, China",
                "level": 6,
                "role": 9,
                "like": 100,
                "dislike": 10,
                "__typename": "CommentMate"
              },
              "__typename": "Comment",
              "children": {
                "nodes": [{
                  "date": "2019-12-05 15:30:27",
                  "content": "<p>re:fsadgfbad<\/p>\n",
                  "commentId": 24,
                  "mate": {
                    "name": "mashiro\u4e2d\u6587",
                    "url": "",
                    "avatar": "https:\/\/secure.gravatar.com\/avatar\/cd2b3a164c977539712929f66cad335c?s=96&d=mm&r=g",
                    "ua": "Chrome 70 Windows 10",
                    "location": "Shanghai, China",
                    "level": 6,
                    "role": 9,
                    "like": 100,
                    "dislike": 10,
                    "__typename": "CommentMate"
                  },
                  "__typename": "Comment",
                  "children": {
                    "nodes": [],
                    "__typename": "CommentToCommentConnection"
                  }
                }, {
                  "date": "2019-12-05 15:30:19",
                  "content": "<p>re:24325<\/p>\n",
                  "commentId": 23,
                  "mate": {
                    "name": "mashiro",
                    "url": "",
                    "avatar": "https:\/\/secure.gravatar.com\/avatar\/cd2b3a164c977539712929f66cad335c?s=96&d=mm&r=g",
                    "ua": "Chrome 70 Windows 10",
                    "location": "Shanghai, China",
                    "level": 6,
                    "role": 9,
                    "like": 100,
                    "dislike": 10,
                    "__typename": "CommentMate"
                  },
                  "__typename": "Comment",
                  "children": {
                    "nodes": [],
                    "__typename": "CommentToCommentConnection"
                  }
                }, {
                  "date": "2019-12-05 15:29:56",
                  "content": "<p>reply233<\/p>\n",
                  "commentId": 21,
                  "mate": {
                    "name": "mashiro",
                    "url": "",
                    "avatar": "https:\/\/secure.gravatar.com\/avatar\/cd2b3a164c977539712929f66cad335c?s=96&d=mm&r=g",
                    "ua": "Chrome 70 Windows 10",
                    "location": "Shanghai, China",
                    "level": 6,
                    "role": 9,
                    "like": 100,
                    "dislike": 10,
                    "__typename": "CommentMate"
                  },
                  "__typename": "Comment",
                  "children": {
                    "nodes": [{
                      "date": "2019-12-05 15:30:09",
                      "content": "<p>re:re:2333<\/p>\n",
                      "commentId": 22,
                      "mate": {
                        "name": "mashiro",
                        "url": "",
                        "avatar": "https:\/\/secure.gravatar.com\/avatar\/cd2b3a164c977539712929f66cad335c?s=96&d=mm&r=g",
                        "ua": "Chrome 70 Windows 10",
                        "location": "Shanghai, China",
                        "level": 6,
                        "role": 9,
                        "like": 100,
                        "dislike": 10,
                        "__typename": "CommentMate"
                      },
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
              "content": "<p>asfadsfgasg<\/p>\n",
              "commentId": 19,
              "mate": {
                "name": "mashiro",
                "url": "",
                "avatar": "https:\/\/secure.gravatar.com\/avatar\/cd2b3a164c977539712929f66cad335c?s=96&d=mm&r=g",
                "ua": "Chrome 70 Windows 10",
                "location": "Shanghai, China",
                "level": 6,
                "role": 9,
                "like": 100,
                "dislike": 10,
                "__typename": "CommentMate"
              },
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
              "content": "<p>asfasfas<\/p>\n",
              "commentId": 18,
              "mate": {
                "name": "mashiro",
                "url": "",
                "avatar": "https:\/\/secure.gravatar.com\/avatar\/cd2b3a164c977539712929f66cad335c?s=96&d=mm&r=g",
                "ua": "Chrome 70 Windows 10",
                "location": "Shanghai, China",
                "level": 6,
                "role": 9,
                "like": 100,
                "dislike": 10,
                "__typename": "CommentMate"
              },
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
              "content": "<p>safassfs<\/p>\n",
              "commentId": 17,
              "mate": {
                "name": "mashiro",
                "url": "",
                "avatar": "https:\/\/secure.gravatar.com\/avatar\/cd2b3a164c977539712929f66cad335c?s=96&d=mm&r=g",
                "ua": "Chrome 70 Windows 10",
                "location": "Shanghai, China",
                "level": 6,
                "role": 9,
                "like": 100,
                "dislike": 10,
                "__typename": "CommentMate"
              },
              "__typename": "Comment",
              "children": {
                "nodes": [],
                "__typename": "CommentToCommentConnection"
              }
            },
            "__typename": "PostToCommentConnectionEdge"
          }],
          "pageInfo": {
            "endCursor": "YXJyYXljb25uZWN0aW9uOjE3",
            "hasNextPage": true,
            "hasPreviousPage": false,
            "startCursor": "YXJyYXljb25uZWN0aW9uOjI2",
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