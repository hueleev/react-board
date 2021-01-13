import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PostList from '../study/components/PostList';
import * as postActions from '../study/store/modules/posts';

class PostListContainer extends Component {
  componentDidMount() {
    const { PostActions } = this.props;
    PostActions.getPosts();
  }

  render() {
    const { PostActions } = this.props;
    const { data, loading, error } = this.props.posts.posts;

    if (loading && !data) return <div>로딩중...</div>; // 로딩중이면서, 데이터가 없을 때에만 로딩중... 표시
    if (error) return <div>에러 발생!</div>;
    if (!data) return null;

    return (<>
      <button onClick={() => PostActions.goToBoardInsert()}>등록</button>
      <PostList posts={data} />
    </>)
  };
}

const mapStateToProps = (state) => ({
  posts: state.posts
});

// 이런 구조로 하면 나중에 다양한 리덕스 모듈을 적용해야 하는 상황에서 유용합니다.
const mapDispatchToProps = dispatch => ({
  PostActions: bindActionCreators(postActions, dispatch),
  // AnotherActions: bindActionCreators(anotherActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostListContainer);