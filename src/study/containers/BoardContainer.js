import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import * as boardActions from '../store/modules/board';
import Board from '../components/Board';
import { getBoardList } from '../api/apiSample';

class BoardContainer extends Component {
    // 인풋 변경 이벤트
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    insertBoard = () => {
        const { BoardActions, boardTitle, boardCn } = this.props;
        BoardActions.insertBoard({boardTitle: boardTitle, boardCn: boardCn});
    };

    componentDidMount = () => {
        const boards = getBoardList();
        this.setState({boards: boards});
    }

    render() {
        const { boards, boardTitle, boardCn } = this.props;
        return (
            <Board
                boardTitle={boardTitle}
                boardCn={boardCn}
                boards={boards}
                onChange={this.handleChange}
                onSubmit={this.insertBoard}
            />
        );
    }
}

const mapStateToProps = ({ board }) => ({
    boards: board.boards,
    boardTitle: board.boardTitle,
    boardCn: board.boardCn
});

// 이런 구조로 하면 나중에 다양한 리덕스 모듈을 적용해야 하는 상황에서 유용합니다.
const mapDispatchToProps = dispatch => ({
    BoardActions: bindActionCreators(boardActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BoardContainer);