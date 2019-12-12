import ApolloClient from 'apollo-boost'

export default class ApoloMutate {
  private mutate: object
  private callback: Function

  /**
   * Do an ApoloQuery  
   * **Do not forget the exotic function object in callback function:** `.bind(this)`
   * @author Mashiro
   * @since 4.0
   * @param {any}      mutate      gql mutate object
   * @param {Function} callback   the callback function.
   */
  public constructor(
    mutate: object,
    callback: Function = function (data: any) {
      console.log(data)
    }
  ) {
    this.mutate = mutate
    this.callback = callback
  }

  public do(): void {
    const client: ApolloClient = new ApolloClient()
    client.mutate(this.mutate)
      .then(data => this.callback(data))
      .catch(error => console.log(error))
  }
}