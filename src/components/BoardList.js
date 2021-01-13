import React from 'react';
import { Link } from 'react-router-dom';

function BoardList({ boards }) {
  return (
    <ul>
      {boards.map(board => (
        <li key={board.boardSeq}>
          <Link to={`/board/detail/${board.boardSeq}`}>{board.boardTitle}</Link>
        </li>
      ))}
    </ul>
  );
}

export default BoardList;