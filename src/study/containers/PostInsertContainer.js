import React, { Component, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as postActions from '../store/modules/posts';
import PostInsert from "../components/PostInsert";
import { bindActionCreators } from 'redux';

class PostInsertContainer extends Component {
  insertBoard = e=> {
    e.preventDefault();
    const { PostActions, board } = this.props;
    PostActions.insertPost(board);
  };

  render() {
    const { board,onChange } = this.props;
    return (
      <PostInsert board={board} onChange={onChange} onSubmit={this.insertBoard} />
    )
  }
}

const mapStateToProps = ( state, ownProps ) => ({
  post: state.post,
  board: ownProps.board,
  onChange: ownProps.onChange
});

// 이런 구조로 하면 나중에 다양한 리덕스 모듈을 적용해야 하는 상황에서 유용합니다.
const mapDispatchToProps = dispatch => ({
  PostActions: bindActionCreators(postActions, dispatch),
  // AnotherActions: bindActionCreators(anotherActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostInsertContainer);
