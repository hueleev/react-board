import produce from 'immer'; // immer 불러오기
import {
    createPromiseThunk,
    createPromiseThunkById,
    reducerUtils,
    handleAsyncActions,
    handleAsyncActionsById
} from '../lib/asyncUtils';
import * as postsAPI from '../api/posts'; // api/posts 안의 함수 모두 불러오기
import { createAction } from 'redux-actions';

// 액션 타입 정의
const GET_BOARD_LIST = 'board_json/GET_BOARD_LIST';
const GET_BOARD_DTL = 'board_json/GET_BOARD_DTL';
const INSERT_BOARD = 'board_json/INSERT_BOARD';
const DELETE_BOARD = 'board_json/DELETE_BOARD';


// 액션 생성함수 정의
export const getBoardList = createAction(GET_BOARD_LIST);
export const getBoardDtl = createAction(GET_BOARD_DTL, boardSeq => boardSeq);
export const insertBoard = createAction(INSERT_BOARD, board => board);
export const deleteBoard = createAction(DELETE_BOARD, boardSeq => boardSeq);

// 초기상태 정의
const initialState = {
    boards: [
        {
            "boardSeq": 1,
            "boardTitle": "Hello",
            "boardCn": "This is React Project",
            "boardPhotoSbst": null
        },
        {
            "boardSeq": 2,
            "boardTitle": "BYE",
            "boardCn": "Sample Project",
            "boardPhotoSbst": null
        }
    ],
    board: {}
}


// 리듀서 작성
export default function boardReducer_json(state = initialState, action) {
    switch (action.type) {
        case GET_BOARD_LIST:
            return {
                ...state
            };
        case GET_BOARD_DTL:
            return {
                ...state,
                board: (state.boards).filter(board => board.boardSeq == action.payload)
            };
        case INSERT_BOARD:
            var id = 1;
            if (state.boards.length !== 0) {
                id = state.boards[state.boards.length-1].boardSeq + 1;
            }
        return {
            ...state,
            boards: state.boards.concat({ "boardSeq": id, "boardTitle": action.payload.boardTitle, "boardCn": action.payload.boardCn, "boardPhotoSbst": action.payload.boardPhotoSbst })
        }
        case DELETE_BOARD:
            console.log(action);
            return {
                ...state,
                boards: (state.boards).filter((board) => board.boardSeq !== action.payload)
            }
        default:
            return state;
    }
}

// 3번째 인자를 사용하면 withExtraArgument 에서 넣어준 값들을 사용 할 수 있습니다.
export const goToBoardInsert = () => (dispatch, getState, { history }) => {
    history.push('/board/insert');
};