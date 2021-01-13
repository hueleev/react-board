import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBoardDtl } from '../modules/boardReducer';
import Board from '../components/Board';

function BoardContainer({ match }) {
  let { boardSeq } = match.params; // URL 파라미터 조회하기
  
  const { data, loading, error } = useSelector(
    state => state.boardReducer.board[boardSeq]
  ) || {
    loading: false,
    data: null,
    error: null
  }; // 아예 데이터가 존재하지 않을 때가 있으므로, 비구조화 할당이 오류나지 않도록
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) return; // 포스트가 존재하면 아예 요청을 하지 않음
    dispatch(getBoardDtl(boardSeq));
  }, [boardSeq, dispatch, data]);

  if (loading && !data) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;

  return (
    <>
      <Board board={data} />
    </>
  );
}

export default BoardContainer;