import { lazy } from "react";

import { loadable } from "src/components";
import { routeHomeBase, routeSigninBase, routeSignupBase } from "./constants/routes";

export const routesConfig = [
  {
    path: routeHomeBase,
    exact: true,
    component: loadable(lazy(() => import("./pages/index"))),
  },
  {
    path: routeSigninBase,
    exact: true,
    component: loadable(lazy(() => import("./pages/signin"))),
  },
  {
    path: routeSignupBase,
    exact: true,
    component: loadable(lazy(() => import("./pages/signup"))),
  },
];
