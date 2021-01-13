import * as postsAPI from '../../../api/posts'; // api/posts 안의 함수 모두 불러오기
import { createAction } from 'redux-actions';
import {
  createPromiseThunk,
  reducerUtils,
  handleAsyncActions,
  createPromiseThunkById,
  handleAsyncActionsById
} from '../../../lib/asyncUtils';

/* 액션 타입 */

// 포스트 여러개 조회하기
const GET_POSTS = 'GET_POSTS'; // 요청 시작
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'; // 요청 성공
const GET_POSTS_ERROR = 'GET_POSTS_ERROR'; // 요청 실패

// 포스트 하나 조회하기
const GET_POST = 'GET_POST';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_ERROR = 'GET_POST_ERROR';

// 포스트 등록 하기
const INSERT_POST = 'INSERT_POST';
const INSERT_POST_SUCCESS = 'INSERT_POST_SUCCESS';
const INSERT_POST_ERROR = 'INSERT_POST_ERROR';

const CHANGE_INPUT = 'CHANGE_INPUT'; // 인풋 값 변경

// 아주 쉽게 thunk 함수를 만들 수 있게 되었습니다.
export const getPosts = createPromiseThunk(GET_POSTS, postsAPI.getBoardList);
export const getPost = createPromiseThunkById(GET_POST, postsAPI.getBoardDtl);
export const insertPost = createPromiseThunk(INSERT_POST, postsAPI.insertBoard);
export const changeInput = createAction(CHANGE_INPUT, text => text);

// initialState 쪽도 반복되는 코드를 initial() 함수를 사용해서 리팩토링 했습니다.
const initialState = {
  posts: reducerUtils.initial(),
  post: {}
};

export default function posts(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
    case GET_POSTS_SUCCESS:
    case GET_POSTS_ERROR:
      return handleAsyncActions(GET_POSTS, 'posts', true)(state, action);
    case GET_POST:
    case GET_POST_SUCCESS:
    case GET_POST_ERROR:
      return handleAsyncActionsById(GET_POST, 'post', true)(state, action);
    case INSERT_POST:
    case INSERT_POST_SUCCESS:
    case INSERT_POST_ERROR:
      return handleAsyncActions(GET_POSTS, 'posts', true)(state, action);
    default:
      return state;
  }
}


// 3번째 인자를 사용하면 withExtraArgument 에서 넣어준 값들을 사용 할 수 있습니다.
export const goToHome = () => (dispatch, getState, { history }) => {
  history.push('/');
};

// 3번째 인자를 사용하면 withExtraArgument 에서 넣어준 값들을 사용 할 수 있습니다.
export const goToBoardInsert = () => (dispatch, getState, { history }) => {
  history.push('/board/insert');
};