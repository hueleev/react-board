import React from 'react';

const BoardItem = ({ boardTitle, cretrId }) => {
  return (
    <tr>
      <td>{boardTitle}</td>
      <td>{cretrId}</td>
    </tr>
  );
};

const Board = ({
  boardTitle,
  boardCn,
  boards,
  onChange,
  onSubmit
}) => {
  const boardItems = boards.map(board => (
    <table>
    <BoardItem
      key={board.boardSeq}
      id={board.boardSeq}
      boardTitle={board.boardTitle}
      cretrId={board.cretrId}
    />
    </table>
  ));
  return (
    <div className="Boards">
      <h2>게시판</h2>
      <form onSubmit={onSubmit}>
        <input name="boardTitle" value={boardTitle} onChange={onChange} />
        <textarea name="boardCn" value={boardCn} onChange={onChange} />
        <button>등록</button>
      </form>
      <ul>{boardItems}</ul>
    </div>
  );
};

export default Board;
