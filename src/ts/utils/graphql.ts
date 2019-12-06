import ApolloClient from 'apollo-boost'
import gql from 'graphql-tag'

class getPostCommentByPostId {
  private postId: number
  private MaxChildrenLevel: number
  public query: object

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
    this.gqlstring()
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
    return addTabs(queryHeader + queryFooter, 3)
  }

  // TODO: GraphQL Schema to Typescript interface?
  private gqlstring(): void {
    this.query = {
      query: gql`
query GET_POST($postId: Int, $first: Int, $after: String) {
  postBy(postId: $postId) {
    id
    postId
    comments(first: $first, after: $after) {
      edges {
        node {
          ...CommentFields${this.queryChildren()}
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
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
    ... on User {
      email
      name
      url
    }
    ... on CommentAuthor {
      email
      url
      name
    }
  }
  authorIp
}
      `,
      variables: {
        "postId": 1,
        "first": 5,
        "after": null
      },
    }
  }
}

export { getPostCommentByPostId }