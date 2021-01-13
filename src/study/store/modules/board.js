import { createAction, handleActions } from 'redux-actions';
import produce from 'immer'; // **** Immer 불러오기

const CREATE = 'board/CREATE';
const LIST = 'board/LIST';
const GET = 'board/GET';

// createAction 으로 액션 생성함수 정의
export const board_create = (board) => ({ type: CREATE, board });
export const board_list = (boards) => ({ type: LIST, boards });
export const board_get = (board) => ({ type: GET, board });

// **** 초기 상태 정의
const initialState = {
    boards: [],
    selectedBoard: {}
};

// handleActions 로 리듀서 함수 작성
export default handleActions(
    {
        [CREATE]: (state, action) =>
            produce(state, draft => {
                draft.boards.push({
                    id: action.payload.boardSeq,
                    boardTitle: action.payload.boardTitle,
                    boardCn: action.payload.boardCn
                });
            }),
        [LIST]: (state, action) =>
            produce(state, draft => {
                draft.board = action.payload.boards
            }),
        [GET]: (state, action) =>
            produce(state, draft => {
                draft.selectedBoardSeq = action.payload
            }),
    },
    initialState
);
