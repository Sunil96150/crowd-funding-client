import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Mainlayout from './Layout/Mainlayout';
import Notfoundpage from './pages/Notfoundpage';
import Home from './pages/Home';
import AllCampaign from './pages/AllCampaign';
import Login from './pages/login';
import AddNewCampaign from './pages/AddNewCampaign';
import Donations from './pages/Donations';
import SeeMore from './pages/SeeMore';
import Update from './pages/Update';
import SignUp from './pages/SignUp';
import AuthProvider from './provider/AuthProvider';
import Users from './pages/Users';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout> ,
    errorElement: <Notfoundpage></Notfoundpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader : () => fetch('https://funding-crowed-server.vercel.app/AllCampaigns')
      },
      {
        path: "/AllCampaign",
        element: <AllCampaign></AllCampaign>,
      },
      {
        path:"/login",
        element: <Login></Login>,
      },
     
      {
        path: "/AddNewCampaign",
        element: <AddNewCampaign></AddNewCampaign>
      },
      {
        path: "/donations",
        element: <Donations></Donations>,
        
      },
      {
        path: '/SeeMore',
        element: <SeeMore></SeeMore>,
        loader : () => fetch('https://funding-crowed-server.vercel.app/AllCampaigns')
      },
      {
        path: '/UpdateCampaign/:id',
        element: <Update></Update>,
        loader: ({params})=> fetch(`https://funding-crowed-server.vercel.app/AllCampaigns/${params.id}`)
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/users',
        element:<Users></Users>,
        loader: () => fetch('https://funding-crowed-server.vercel.app/users'),
      }
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
  </StrictMode>,
)
