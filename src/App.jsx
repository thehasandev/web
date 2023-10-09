import React from 'react'
import Affiliate from './components/Affiliate'
import Payment from './components/Payment'
import Widrow from './components/Widrow'
import { RouterProvider } from 'react-router-dom'
import router from './routes/route'
function App() {
  return (
    <div>
     <RouterProvider router={router}/>
    </div>
  )
}

export default App