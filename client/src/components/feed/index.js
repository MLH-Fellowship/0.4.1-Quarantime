import React from "react";
import Post from "../post";
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'


const GET_ALL_POSTS = gql`
  {
    getPosts {
    id
    body
    createdAt
    username
    comments {
      id
      username
      body
      createdAt
    }
    likes {
      id
      createdAt
      username
    }
  }
}
`


function Feed() {
  const { loading, error, data } = useQuery(GET_ALL_POSTS)
   if (loading) return <p>Loading...</p>
   if (error) return <p>Error :(</p>

  console.log({ data })
  return (
    <div>
      {data.getPosts.map((fields) => (
        <Post {...fields} />
      ))}
    </div>
  )
}

export default Feed;
