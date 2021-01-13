import React from 'react';
import { Link } from 'react-router-dom';

function PostList({ posts }) {
  return (
    <ul>
      {posts.map(post => (
        <li key={post.boardSeq}>
          <Link to={`/${post.boardSeq}`}>{post.boardTitle}</Link>
        </li>
      ))}
    </ul>
  );
}

export default PostList;