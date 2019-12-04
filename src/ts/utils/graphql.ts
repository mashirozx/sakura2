import ApolloClient from 'apollo-boost'
import gql from 'graphql-tag'

class getPostCommentByPostId {
  private postId: number
  private MaxChildrenLevel: number

  /**
   * Get post comment bay wp post id through GraphQL
   * @author Mashiro
   * @license MIT
   * @since 4.0
   * @param {number} postId           wordpress post id
   * @param {number} MaxChildrenLevel post threaded (nested) comments levels deep (/wp-admin/options-discussion.php)
   */
  public constructor(postId: number, MaxChildrenLevel) {
    this.postId = postId
    this.MaxChildrenLevel = MaxChildrenLevel
  }

  private queryChildren() {
    let queryHeader: string = ``
    let queryFooter: string = ``
    const childrenHeader: string = `
children {
  nodes {
    ...CommentFields`

    const childrenFooter: string = `
  }
}`

    let addTabs = function (str: string, n: number) {
      return str.replace(/^/gm, '  '.repeat(n))
    }

    for (let i = 0; i < this.MaxChildrenLevel; i++) {
      queryHeader = addTabs(childrenHeader + queryHeader, 2)
      queryFooter = addTabs(queryFooter + childrenFooter, 2)
    }
    return addTabs(queryHeader + queryFooter, 2)
  }

  /**
   * @return {any} GraphQL query json string
   */
  public query() {
    let result: object
    const client: ApolloClient = new ApolloClient()
    client.query({
      query: gql`
query GET_POST($postId: Int) {
  postBy(postId: $postId) {
    id
    postId
    title
    date
    uri
    content
  }
  comments {
    edges {
      node {
        ...CommentFields${this.queryChildren()}
      }
    }
  }
}

fragment CommentFields on Comment {
  date
  agent
  content(format: RENDERED)
  commentId
  author {
    ... on CommentAuthor {
      email
      name
      url
    }
  }
  authorIp
}
`,
      variables: {
        "postId": this.postId
      },
    })
      .then(data => {
        result = data
      }) // 异步好烦
      // .then(data => console.log(data))
      .catch(error => console.log(error))

    return result
  }
}

export { getPostCommentByPostId }