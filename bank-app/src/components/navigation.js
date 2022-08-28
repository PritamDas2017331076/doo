import React from 'react'
import { useCookies ,removeCookie} from 'react-cookie';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
///log out navigation
function Navigation() {
  const navigate = useNavigate()
  const logout = (e)=>{

        e.preventDefault();
        let token = localStorage.getItem('btoken')
        axios.get('http://localhost:5001/users/logout',{
          headers:{
            'Authorization':token
          }
        })
        .then(res=>{
          console.log('logout ',res.data)
          localStorage.setItem('btoken','')
          localStorage.setItem('bid','')
          window.location.href='/'
          navigate('/')
        })
      }
  return (
      <div className="nav">
        
        <nav className="navbar navbar-expand-sm navbar-light fixed-top">
          <div className="">
            <Link className="navbar-brand" to={'/sign-in'}>
                Codezup
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    Account
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    Support
                  </Link>
                </li>
                {
                  localStorage.getItem('buser')!=='bank'?
                  <li className="nav-item">
                  <Link className="nav-link" to={'/info'}>
                    info
                  </Link>
                  </li>
                  :<li className="nav-item">
                  <Link className="nav-link" to={'/update'}>
                    update
                  </Link>
                  </li>
                }
                <li className="nav-item">
                  <button className="nav-link" onClick={logout}>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        
      </div>
    
  )
}
export default Navigation
