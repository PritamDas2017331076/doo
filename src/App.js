import React,{useState} from 'react'

import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './components/login'
import SignUp from './components/signup'
import LoginNavigation from './components/loginNavigation'
import Navigation from './components/navigation'
import {useCookies,removeCookie,Cookies} from 'react-cookie'
import Homepage from './pages/homepage'
import Bankinfo from './pages/bankinfo'
import ProductInfo from './pages/ProductInfo'
import Cart from './pages/Cart'
function App() {
  const [cookie,setCookie] = useCookies('user')
  const [loggedin,setloggedin] = useState(0)
  
  return (
    <Router>
      <div className="App">
        {localStorage.getItem('token')?(<Navigation/>):<LoginNavigation/>}
        <div className="">
          <div className="">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path = "/home" element={<Homepage/>} />
              <Route path = "/bank-info" element = {<Bankinfo/>}/>
              <Route path = '/product-info' element = {<ProductInfo/>}/>  
              <Route path = '/cart' element={<Cart/>}/>
            </Routes>
          </div>
        </div>
      </div>
      
    </Router>
  )
}
export default App