import React, { useState } from 'react';

function PostInsertForm({ board, onSubmit, onChange }) {
    return (
        <div>
            <form onSubmit={onSubmit}>
            <input name="boardTitle" value={board.boardTitle} onChange={onChange} />
            <input name="boardCn" value={board.boardCn} onChange={onChange} />
            <button>등록</button>
            </form>
        </div>
    );
}

export default PostInsertForm;