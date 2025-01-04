
import {createBrowserRouter,} from "react-router-dom";
import Home from "../Pages/Home";
import NotFound from "../NotFoundPage/NotFound";




const MainRoute = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>, 
      errorElement:<NotFound></NotFound>,
      children:[
        {

        }
      ]

    },
  ]);

  export default MainRoute;