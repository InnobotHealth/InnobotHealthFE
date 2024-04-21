import './App.css'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Verify from './Components/Verify/Verify' 
import Password  from './Components/Password/Password'
import Dashboard from './Components/common/common'
import Appointments from './Components/Appointments/Appointments'
import  Schedule  from  './Components/Schedule/Schedule'
import Scheduleinsurance from './Components/Scheduleinsurance/Scheduleinsurance'
import UpdateAppointment from './Components/UpdateAppointment/UpdateAppointment'
import DisplayAppointment from './Components/DisplayAppointment/DisplayAppointment'
import DisplayScheduled from './Components/DisplayScheduled/DisplayScheduled'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: '/',
    element: <div><Login /> </div>
  },
  {
    path: '/register',
    element: <div><Register /> </div>
  } ,
  {
    path: '/Verify',
    element: <div><Verify /> </div>
  } ,
  {
    path: '/password',
    element: <div><Password /> </div>
  },
  {
    path: '/dashboard',
    element: <div><Dashboard /> </div>
  },
  {
    path: '/appointments',
    element: <div><Appointments/> </div>
  },
  {
    path: '/schedule',
    element: <div><Schedule/> </div>
  },
  {
    path: '/scheduleinsurance',
    element: <div><Scheduleinsurance/> </div>
  },
  {
    path: '/updateapp',
    element: <div><UpdateAppointment/> </div>
  },
  {
    path: '/displayappointment',
    element: <div><DisplayAppointment/> </div>
  },
  {
    path: '/displayscheduled',
    element: <div><DisplayScheduled/> </div>
  },
  

])

function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
