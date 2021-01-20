import React, { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BoardList from '../components/BoardList';
import { getBoardList, goToBoardInsert, boardTest, deleteBoard, insertBoard } from '../modules/boardReducer';
import BoardInsert from "../components/BoardInsert";
import { useInputs } from "../lib/hooks";

function BoardListContainer() {
    const { boards, result } = useSelector(state => state.boardReducer);

    const dispatch = useDispatch();

    const [ {boardTitle, boardCn}, onChange, reset] = useInputs({
        boardTitle: "",
        boardCn: ""
    });

    const onSubmit = useCallback(() => {
        dispatch(insertBoard({boardTitle, boardCn}));
        alert("등록완료");
        reset();
    }, [{boardTitle, boardCn}]);

    const onDelete = useCallback((boardSeq) => {
        dispatch(deleteBoard(boardSeq));
    }, []);

    useEffect(() => {
        dispatch(getBoardList());
    }, [result]);

    if (boards.loading) return <div>로딩중...</div>;
    if (boards.error) return <div>에러 발생!</div>;
    if (!boards.data) return null;

    return (
        <>
            <BoardInsert board={{boardTitle, boardCn}} onChange={onChange} onSubmit={onSubmit} />
            <BoardList boards={boards.data} deleteBoard={onDelete} />
            <button onClick={() => dispatch(boardTest("test", "test2"))}>테스트</button>
            {/* <button onClick={() => dispatch(goToBoardInsert())}>등록</button> */}
        </>
    )
}

export default React.memo(BoardListContainer);