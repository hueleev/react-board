import React from 'react';

function Board({ board }) {
  const { boardTitle, boardCn, boardPhotoSbst } = board;
  const style = {
    width: "300px"
  }
  return (
    <div>
      <h1>{boardTitle}</h1>
      <p>{boardCn}</p>
      {boardPhotoSbst != null ? <img style={style} src={"data:image/jpeg; base64, "+ boardPhotoSbst}/> : null}
    </div>
  );
}

export default Board;