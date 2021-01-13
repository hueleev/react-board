import axios from 'axios';

export const getBoardList = async() => {
    const settingHeaders = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const response = await axios.get(`http://localhost:8080/allEars/board`, settingHeaders);
    return response.data.rows;
}

export const getBoardDtl = async(boardSeq) => {
    const settingHeaders = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const response = await axios.get(`http://localhost:8080/allEars/board/${boardSeq}`, settingHeaders);
    return response.data;
}

export const insertBoard = async(board) => {

    console.log(board);
    const formData = new FormData();
    formData.append("boardTitle", board.boardTitle);
    formData.append("boardCn", board.boardCn);
    const settingHeaders = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }

    const response = await axios.post(`http://localhost:8080/allEars/board`, formData, settingHeaders);
    return response.data;
}