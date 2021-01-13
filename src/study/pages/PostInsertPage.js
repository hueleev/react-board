import React, { useState } from 'react';
import PostInsertContainer from '../containers/PostInsertContainer';

function PostInsertPage() {

  const [board, setBoard] = useState({
    boardTitle: "",
    boardCn: ""
  });

  const onChange = e => {
    setBoard({ ...board, [e.target.name]: e.target.value });
  };

  return <><PostInsertContainer board={board} onChange={onChange} /></>;
}

export default PostInsertPage;