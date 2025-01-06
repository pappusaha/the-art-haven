
import {createBrowserRouter,} from "react-router-dom";
import Home from "../Pages/Home";
import NotFound from "../NotFoundPage/NotFound";
import MainLayouts from "../Layouts/MainLayouts";
import AddItems from "../Pages/AddItems";
import LogIn from "../Components/LogIn";
import Register from "../Components/Register";
import Contact from "../Components/Contact";





const MainRoute = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts></MainLayouts>,
      errorElement:<NotFound></NotFound>,
      children:[
        {
path:'/', 
element:<Home></Home>,
loader: () => fetch('http://localhost:5000/craftItems')
        },
        {
          path:'/addItems',
          element:<AddItems></AddItems>,
        },
        {
          path:'/logIn',
          element:<LogIn></LogIn>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/contact',
          element:<Contact></Contact>
        }, 
        {
          path:''
        }


      ]

    },
  ]);

  export default MainRoute;