import React from 'react'
import {  BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import LandPage from './Pages/LandPage'
import AboutPage from './Pages/AboutPage'
import ContactPage from './Pages/ContactPage'
import AuthPage from './Pages/AuthPage'
import LoginPage from './Pages/LoginPage'
import SignupPage from './Pages/SignupPage'
import GiveDetailsPage from './Pages/GiveDetailsPage'
import { useAuthContext } from './context/AuthContextProvider'
import CustomAlert from './components/CustomAlert'

function App() {
  const {isAuthenticated} = useAuthContext()
  return (
   <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}>
            <Route path='/' element={<LandPage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/contact' element={<ContactPage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/signup' element={<SignupPage/>}/>

            <Route path='/querypage' element={isAuthenticated ?<GiveDetailsPage/>: <CustomAlert/>}/>
            </Route >
           
        </Routes>
   </BrowserRouter>
  )
}

export default App