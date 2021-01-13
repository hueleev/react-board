import produce from 'immer'; // immer 불러오기
import {
    createPromiseThunk,
    createPromiseThunkById,
    reducerUtils,
    handleAsyncActions,
    handleAsyncActionsById
} from '../lib/asyncUtils';
import * as postsAPI from '../api/posts'; // api/posts 안의 함수 모두 불러오기

// 액션 타입 정의
const GET_BOARD_LIST = 'board/GET_BOARD_LIST';
const GET_BOARD_LIST_SUCCESS = 'board/GET_BOARD_LIST_SUCCESS';
const GET_BOARD_LIST_ERROR = 'board/GET_BOARD_LIST_ERROR';

const GET_BOARD_DTL = 'board/GET_BOARD_DTL';
const GET_BOARD_DTL_SUCCESS = 'board/GET_BOARD_DTL_SUCCESS';
const GET_BOARD_DTL_ERROR = 'board/GET_BOARD_DTL_ERROR';

const INSERT_BOARD = 'board/INSERT_BOARD';
const INSERT_BOARD_SUCCESS = 'board/INSERT_BOARD';
const INSERT_BOARD_ERROR = 'board/INSERT_BOARD_ERROR';

// 액션 생성함수 정의
export const getBoardList = createPromiseThunk(GET_BOARD_LIST, postsAPI.getBoardList);
export const getBoardDtl = createPromiseThunkById(GET_BOARD_DTL, postsAPI.getBoardDtl);
export const insertBoard = createPromiseThunk(INSERT_BOARD, postsAPI.insertBoard);

// 초기상태 정의
const initialState = {
    boards: reducerUtils.initial(),
    board: []
}

// 리듀서 작성
export default function boardReducer(state = initialState, action) {
    switch (action.type) {
        case GET_BOARD_LIST:
        case GET_BOARD_LIST_SUCCESS:
        case GET_BOARD_LIST_ERROR:
            return handleAsyncActions(GET_BOARD_LIST, 'boards', true)(state, action);
        case GET_BOARD_DTL:
        case GET_BOARD_DTL_SUCCESS:
        case GET_BOARD_DTL_ERROR:
            return handleAsyncActionsById(GET_BOARD_DTL, 'board', true)(state, action);
        case INSERT_BOARD:
        case INSERT_BOARD_SUCCESS:
        case INSERT_BOARD_ERROR:
            return handleAsyncActionsById(INSERT_BOARD, 'board', true)(state, action);
        default:
            return state;
    }
}

// 3번째 인자를 사용하면 withExtraArgument 에서 넣어준 값들을 사용 할 수 있습니다.
export const goToBoardInsert = () => (dispatch, getState, { history }) => {
    history.push('/board/insert');
  };