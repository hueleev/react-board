import React, { useState } from 'react';

function BoardInsert({ board, onChange, onSubmit }) {
    const { boardTitle, boardCn } = board;
    const insertBoard = e => {
        e.preventDefault();
        onSubmit();
    }

    return (
        <div>
            <form onSubmit={insertBoard}>
                <input name="boardTitle" value={boardTitle} onChange={onChange} />
                <input name="boardCn" value={boardCn} onChange={onChange} />
                <button>등록</button>
            </form>
        </div>
    );
}

export default BoardInsert;