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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout> ,
    errorElement: <Notfoundpage></Notfoundpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/AllCampaign",
        element: <AllCampaign> </AllCampaign>
      },
      {
        path:"/login",
        element: <Login></Login>
      },
      {
        path: "/AddNewCampaign",
        element: <AddNewCampaign></AddNewCampaign>
      },
      {
        path: "/donations",
        element: <Donations></Donations>
      }
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
