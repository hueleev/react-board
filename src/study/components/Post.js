import React from 'react';

function Post({ post }) {
  const { boardTitle, boardCn } = post;
  return (
    <div>
      <h1>{boardTitle}</h1>
      <p>{boardCn}</p>
    </div>
  );
}

export default Post;