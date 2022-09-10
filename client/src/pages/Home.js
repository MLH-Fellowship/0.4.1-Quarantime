import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Grid, Transition } from 'semantic-ui-react';

import { AuthContext } from '../context/auth';
import PostCard from '../components/PostCard';
import PostForm from '../components/PostForm';
import { FETCH_POSTS_QUERY } from '../util/graphql';
import Sppiner from './Sppiner';



function Home() {
  const { user } = useContext(AuthContext);
  const {
    loading,
    data: { getPosts: posts} ={}}
   = useQuery(FETCH_POSTS_QUERY);

  return (
   
    <Grid columns={1}>
      <Grid.Row className="page-title">
        <h1 id="quarantime">QUARANTIME</h1>
      </Grid.Row>
      <Grid.Row>
        {user && (
          <Grid.Column>
            <PostForm />
          </Grid.Column>
        )}
        {loading ? (
<Grid.Row className="page-title">
 
        <h1 ><Sppiner/></h1>
        </Grid.Row>
        ) : (
          <Transition.Group>
            {posts &&
              posts.map((post) => (
                <Grid.Column key={post.id} style={{ marginBottom: 20, marginTop: 20 }}>
                  <PostCard post={post} />
                </Grid.Column>
              ))}
          </Transition.Group>
        )}
      </Grid.Row>
    </Grid>
  );
}

export default Home;
