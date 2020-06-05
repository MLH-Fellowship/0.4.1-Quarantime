import graphql from 'babel-plugin-relay/macro'
import { commitMutation } from 'react-relay'
import environment from '../../environment'

const mutation = graphql`
  mutation LoginMutation($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      id
      email
      username
      createdAt
      token
    }
  }
`
export default (username, password, cb) => {
  const variables = {
    username,
    password,
  }

  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (res, err) => cb(err, res),
    onError: (e) => cb(e),
  })
}
