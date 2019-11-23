import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

const client = new ApolloClient()

client.query({
  query: gql`
  query GET_POST($id: ID!) {
    post(id: $id) {
      id
      postId
      title
      date
      uri
      content
    }
  }
  `,
  variables: {
    "id": "cG9zdDozOQ=="
  },
})
  .then(data => console.log(data))
  .catch(error => console.error(error))