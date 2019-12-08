import ApolloClient from 'apollo-boost'
import gql from 'graphql-tag'

class ApoloQuery {
  private query: object
  private callback: Function

  /**
   * Do an ApoloQuery
   * @author Mashiro
   * @since 4.0
   * @param {any}      query      gql query object
   * @param {Function} callback   the callback function
   */
  public constructor(
    query: object,
    callback: Function = function (data: any) {
      console.log(data)
    }
  ) {
    this.query = query
    this.callback = callback
  }

  public do(): void {
    const client: ApolloClient = new ApolloClient()
    client.query(this.query)
      .then(data => this.callback(data))
      .catch(error => console.log(error))
  }
}

class getPostCommentByPostId {
  private postId: number
  private first: number
  private last: number
  private before: string
  private after: string
  public query: object

  /**
   * Get post comment bay wp post id through GraphQL
   * @author Mashiro
   * @since 4.0
   * @param {number} postId   wordpress post id
   * @param {number} first    first n contents to show
   * @param {number} last     last n contents to show
   * @param {string} before   startCursor
   * @param {string} after    endCursor
   */
  public constructor(
    postId: number,
    first: number = null,
    last: number = null,
    before: string = null,
    after: string = null
  ) {
    this.postId = postId
    this.first = first
    this.last = last
    this.before = before
    this.after = after
    this.gqlstring()
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
                  ...CommentFields
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
          content(format: RENDERED)
          commentId
          mate {
            name
            url
            avatar
            ua
            location
            level
            role
            like
            dislike
            child
            childPre
          }
        }
      `,
      variables: {
        "postId": this.postId,
        "first": this.first,
        "last": this.last,
        "after": this.after,
        "before": this.before
      },
    }
  }

  //   private queryChildren() {
  //     let queryHeader: string = ``
  //     let queryFooter: string = ``
  //     const childrenHeader: string = `
  // children {
  //   nodes {
  //     ...CommentFields`

  //     const childrenFooter: string = `
  //   }
  // }`

  //     let addTabs = function (str: string, n: number) {
  //       return str.replace(/^/gm, '  '.repeat(n))
  //     }

  //     for (let i = 0; i < this.MaxChildrenLevel; i++) {
  //       queryHeader = addTabs(childrenHeader + queryHeader, 2)
  //       queryFooter = addTabs(queryFooter + childrenFooter, 2)
  //     }
  //     return addTabs(queryHeader + queryFooter, 3)
  //   }

  //   private gqlstring_withchild(): void {
  //     this.query = {
  //       query: gql`
  // query GET_POST($postId: Int, $first: Int, $after: String) {
  //   postBy(postId: $postId) {
  //     id
  //     postId
  //     comments(first: $first, after: $after) {
  //       edges {
  //         node {
  //           ...CommentFields${this.queryChildren()}
  //         }
  //       }
  //       pageInfo {
  //         endCursor
  //         hasNextPage
  //         hasPreviousPage
  //         startCursor
  //       }
  //     }
  //   }
  // }

  // fragment CommentFields on Comment {
  //   date
  //   content(format: RENDERED)
  //   commentId
  //   mate {
  //     name
  //     url
  //     avatar
  //     ua
  //     location
  //     level
  //     role
  //     like
  //     dislike
  //   }
  // }
  //       `,
  //       variables: {
  //         "postId": this.postId,
  //         "first": this.first,
  //         "after": this.after,
  //         "before":this.before
  //       },
  //     }
  //   }
}

export { ApoloQuery, getPostCommentByPostId }