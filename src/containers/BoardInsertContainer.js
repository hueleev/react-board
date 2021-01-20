import React, { Component, useEffect, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { insertBoard } from '../modules/boardReducer';
import BoardInsert from "../components/BoardInsert";

function BoardInsertContainer() {
  const [board, setBoard] = useState({
    "boardTitle": "",
    "boardCn": ""
  });

  const onChange = useCallback(e => {
    setBoard({
      ...board,
      [e.target.name] : e.target.value
    })
  }, [board]);

  const dispatch = useDispatch();

  const onSubmit = useCallback(() => {
    dispatch(insertBoard(board));
    alert("등록완료");
    setBoard({
      "boardTitle": "",
      "boardCn": ""
    });
  }, [board]);

  return (
      <BoardInsert board={board} onChange={onChange} onSubmit={onSubmit}/>
  )
}

export default React.memo(BoardInsertContainer);
