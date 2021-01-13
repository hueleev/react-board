import React, { Component, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { insertBoard } from '../modules/boardReducer';
import BoardInsert from "../components/BoardInsert";

function BoardInsertContainer() {
  const [board, setBoard] = useState({
    "boardTitle": "",
    "boardCn": ""
  });

  const onChange = e => {
    setBoard({
      ...board,
      [e.target.name] : e.target.value
    })
  };

  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(insertBoard(board));
    alert("등록완료");
    setBoard({
      "boardTitle": "",
      "boardCn": ""
    });
  }

  return (
      <BoardInsert board={board} onChange={onChange} onSubmit={onSubmit}/>
  )
}

export default BoardInsertContainer;
