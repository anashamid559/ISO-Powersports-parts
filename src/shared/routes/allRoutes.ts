import Home from "../../pages";
import { routeConstant } from "./routeConstant";


export interface RouteType {
  path: string;
  element: React.ComponentType; 
}

const publicRoute: RouteType[] = [
  {
    path: routeConstant.home.path,
    element: Home,
  },
];

export { publicRoute };
