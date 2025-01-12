
import {createBrowserRouter,} from "react-router-dom";
import Home from "../Pages/Home";
import NotFound from "../NotFoundPage/NotFound";
import MainLayouts from "../Layouts/MainLayouts";
import AddItems from "../Pages/AddItems";
import LogIn from "../Components/LogIn";
import RegistrationPage from "../Components/RegistrationPage";
import Contact from "../Components/Contact";
import AllItems from "../Components/AllItems";
import ArtDetails from "../Components/ArtDetails";
import EditArt from "../Components/EditArt";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import MyCreations from "../Pages/Mycreations";





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
          element: (
            <ProtectedRoute>
              <AddItems></AddItems>,
            </ProtectedRoute>
          ),
        },
        {
          path:'/login',
          element:<LogIn></LogIn>
        },
        {
          path:'/registrationPage',
          element:<RegistrationPage></RegistrationPage>
        },
        {
          path:'/contact',
          element:<Contact></Contact>
        }, 
        {
          path:'/allItems',
          element:   <AllItems></AllItems>,
          loader:() => fetch('http://localhost:5000/craftItems') 
        },
        {
          path:'/artDetails/:id',
          element:(<ProtectedRoute>
            <ArtDetails></ArtDetails>
          </ProtectedRoute>

          ),
          loader:({params}) => fetch(`https://canvas-strokes-sever-side-mkxfl3gny-pappusahas-projects.vercel.app/${params.id}`)

        },
       {
         path:'/editArt/:id',
         element:<EditArt></EditArt>,
         loader:({params}) => fetch(`https://canvas-strokes-sever-side-mkxfl3gny-pappusahas-projects.vercel.app/${params.id}`)
       }, 
       {
        path:'/MyCreations',
        element:(<ProtectedRoute>
          <MyCreations></MyCreations>
        </ProtectedRoute>)
       }


      ]

    },
  ]);

  export default MainRoute;