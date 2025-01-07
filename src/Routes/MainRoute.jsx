
import {createBrowserRouter,} from "react-router-dom";
import Home from "../Pages/Home";
import NotFound from "../NotFoundPage/NotFound";
import MainLayouts from "../Layouts/MainLayouts";
import AddItems from "../Pages/AddItems";
import LogIn from "../Components/LogIn";
import Register from "../Components/Register";
import Contact from "../Components/Contact";
import AllItems from "../Components/AllItems";
import ArtDetails from "../Components/ArtDetails";
import EditArt from "../Components/EditArt";





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
          path:'/allItems',
          element:<AllItems></AllItems>,
          loader:() => fetch('http://localhost:5000/craftItems') 
        },
        {
          path:'/artDetails/:id',
          element:<ArtDetails></ArtDetails>,
          loader:({params}) => fetch(`http://localhost:5000/craftItems/${params.id}`)

        },
       {
         path:'/editArt/:id',
         element:<EditArt></EditArt>,
         loader:({params}) => fetch(`http://localhost:5000/craftItems/${params.id}`)
       }


      ]

    },
  ]);

  export default MainRoute;