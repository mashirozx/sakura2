import ApoloMutate from './graphql-mutate'
import PageNavigationBar from './pageNavigationBar'
import mutateCreateComment from '../graphql/mutateCreateComment.gql'

export default class CreateComment{
  public constructor(){
    this.main()
  }

  public mutate_callback(data){
    console.log(data)
  }

  private main(){
    let currentdate = new Date(); 
    let datetime = "Last Sync: " + currentdate.getDate() + "/"
                    + (currentdate.getMonth()+1)  + "/" 
                    + currentdate.getFullYear() + " @ "  
                    + currentdate.getHours() + ":"  
                    + currentdate.getMinutes() + ":" 
                    + currentdate.getSeconds();

    const mutation = {
      mutation: mutateCreateComment,
      variables: {
        "input": {
          "clientMutationId": "CreateComment",
          "content": datetime,
          "author": "Kirito",
          "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.3",
          "authorEmail": "geanguanzx@gmail.com",
          "commentOn": 1
        }
      }
    }

    const client: ApoloMutate = new ApoloMutate(mutation, this.mutate_callback.bind(this))
    client.do()
  }
}