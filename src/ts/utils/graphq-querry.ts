import ApolloClient from 'apollo-boost'

export default class ApoloQuery {
  private query: object
  private callback: Function

  /**
   * Do an ApoloQuery  
   * **Do not forget the exotic function object in callback function:** `.bind(this)`
   * @author Mashiro
   * @since 4.0
   * @param {any}      query      gql query object
   * @param {Function} callback   the callback function.
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