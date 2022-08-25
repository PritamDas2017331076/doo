import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Login from './components/login'
import SignUp from './components/signup'
import Bankinfo from './pages/bankinfo'
import Homepage from './pages/homepage'
import LoginNavigation from './components/loginNavigation'
import Navigation from './components/navigation'
import {useCookies} from 'react-cookie'
function App() {
  // const [cookie,setCookie] = useCookies('user')
  return (
    <BrowserRouter>
      <div className = 'App'>
        {/* {cookie?(<Navigation/>):(<LoginNavigation/>)} */}
        
        <div className="auth-wrapper">
            <div className="auth-inner">
              <Routes>
                <Route exact path="/" element={<App/>} />
                <Route> path = "/" element = {<Login/>}</Route>
                <Route path="/sign-in" element={<Login />} />
                <Route path="/sign-up" element={<SignUp/>} />
                <Route path = '/bank-info' element = {<Bankinfo/>}/>
                <Route path = '/home' element = {<Homepage/>}/>
              </Routes>
            </div>
          </div>
      </div>
    </BrowserRouter> 
  )
}
export default App

