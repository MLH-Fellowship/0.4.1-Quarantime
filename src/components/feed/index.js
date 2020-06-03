import React from "react";
import Post from "../post";

function Feed() {
  return (
    <div>
      {[1, 2, 3, 4].map(item => (
        <Post />
      ))}
    </div>
  );
}

export default Feed;
