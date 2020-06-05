import React, { useContext } from 'react';
import { Grid, Transition } from 'semantic-ui-react';
import graphql from 'babel-plugin-relay/macro'
import { AuthContext } from '../context/auth';
import PostCard from '../components/PostCard';
import PostForm from '../components/PostForm';
import {  QueryRenderer } from 'react-relay'
import environment from '../environment';


function Home() {
  const { user } = useContext(AuthContext);
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query HomeQuery {
          getPosts {
            id
            body
            createdAt
            username
            likeCount
            likes {
              username
            }
            commentCount
            comments {
              id
              username
              createdAt
              body
            }
          }
        }
      `}
      variables={{}}
      render={({ error, props }) => {
        if (error) {
          return <div>Error!</div>
        }
        if (!props) {
          return <div>Loading...</div>
        }
        
        return (
          <Grid columns={1}>
            <Grid.Row className='page-title'>
              <h1>Quarantime</h1>
            </Grid.Row>
            <Grid.Row>
              {user && (
                <Grid.Column>
                  <PostForm />
                </Grid.Column>
              )}
              {!props ? (
                <h1>Please wait..</h1>
              ) : (
                <Transition.Group>
                  {props.getPosts &&
                    props.getPosts.map((post) => (
                      <Grid.Column
                        key={post.id}
                        style={{ marginBottom: 20, marginTop: 20 }}
                      >
                        <PostCard post={post} />
                      </Grid.Column>
                    ))}
                </Transition.Group>
              )}
            </Grid.Row>
          </Grid>
        )
      }}
    />
  )
}

export default Home;
