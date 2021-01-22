import React from "react";
import {
  Route
} from "react-router-dom";

import BoardListContainer from '../containers/BoardListContainer';
import BoardContainer from "../containers/BoardContainer";
import BoardInsertContainer from "../containers/BoardInsertContainer";
import Landing from "../containers/Git";
import Git from "../containers/Git";

// import useReactRouter from 'use-react-router';

export const routes = [
  {
    path: "/all-ears-front",
    component: Git,
    exact: true
  },
  {
    path: "/all-ears-front/board/list",
    component: Landing,
    exact: true
  },
  {
    path: "/all-ears-front/board/detail/:boardSeq",
    component: BoardContainer,
    exact: true
  },
  {
    path: "/all-ears-front/board/insert",
    component: BoardInsertContainer,
    exact: true
  },
  {
    path: "/all-ears-front/list",
    component: BoardListContainer,
    exact: true
  }
  // {
  //   path: "/:id",
  //   component: PostPage,
  //   exact: true
  //   //   routes: [
  //   //     {
  //   //       path: "/tacos/bus",
  //   //       component: Bus
  //   //     },
  //   //     {
  //   //       path: "/tacos/cart",
  //   //       component: Cart
  //   //     }
  //   //   ]
  // },
  
];

export const RouteWithSubRoutes = (route) => {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} exact={route.exact} routes={route.routes} />
      )}
    />
  );
};

// export const RouterHookSample = () => {
//   const { history, location, match } = useReactRouter;
//   console.log({ history, location, match });
//   return null;
// }
