import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

import {
   Badge,
   Button,
   Card,
   CardBody,
   Col
} from "reactstrap";

const Board = React.memo(function Board({ board, deleteBoard }) {
   const onClick = useCallback((boardSeq) => {
      deleteBoard(boardSeq);
   });
   return (
      <Col lg="4" key={board.boardSeq}>
         <Link to={`/board/detail/${board.boardSeq}`}>
            <Card className="card-lift--hover shadow border-0 mb-5">
               <CardBody className="py-5">
                  <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                     <i className="ni ni-check-bold" />
                  </div>
                  <h6 className="text-primary text-uppercase">
                     {board.boardTitle}
                  </h6>
                  <p className="description mt-3">
                     {board.boardCn}
                  </p>
                   {/* <div>
                     <Badge color="primary" pill className="mr-1">
                        design
                     </Badge>
                     <Badge color="primary" pill className="mr-1">
                        system
                     </Badge>
                     <Badge color="primary" pill className="mr-1">
                        creative
                     </Badge>
                  </div>  */}
                  <Button
                     type="button"
                     className="mt-3"
                     color="danger"
                     href="#pablo"
                     onClick={e => {e.preventDefault(); onClick(board.boardSeq)}}
                  >
                     DELETE
                  </Button>
               </CardBody>
            </Card>
         </Link>
      </Col>
   );
});

function BoardList({ boards, deleteBoard }) {
   return (
      <>
         {boards.map(board => (
            <Board key={board.boardSeq} board={board} deleteBoard={deleteBoard} />
         ))}
      </>
   );
}

export default React.memo(BoardList);