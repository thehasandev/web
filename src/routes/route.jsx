import React from 'react'

import { createBrowserRouter } from 'react-router-dom'
import Widrow from '../components/Widrow';
import Payment from '../components/Payment';
import Affiliate from '../components/Affiliate';
import Configer from '../components/Configer';
import AffliateUsers from "../components/AffliateUsers"

const router = createBrowserRouter([
    {
      path: "/affilate",
      element:<Affiliate/>,
    },
    {
      path: "/payment",
      element:<Payment/>,
    },
    {
      path: "/Widrow",
      element:<Widrow/>,
    },
    {
      path: "/configer-setting",
      element:<Configer/>,
    },
    {
      path: "/affilate-users",
      element:<AffliateUsers/>,
    },
  ]);

  export default router