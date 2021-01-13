import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BoardList from '../components/BoardList';
import { getBoardList, goToBoardInsert } from '../modules/boardReducer';

function BoardListContainer() {
    const { data, loading, error } = useSelector(state => state.boardReducer.boards);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBoardList());
    }, [dispatch]);

    if (loading) return <div>로딩중...</div>;
    if (error) return <div>에러 발생!</div>;
    if (!data) return null;

    return (
        <>
            <BoardList boards={data}/>
            <button onClick={() => dispatch(goToBoardInsert())}>등록</button>
        </>
    )
}

export default BoardListContainer;