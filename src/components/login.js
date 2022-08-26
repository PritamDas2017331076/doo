import React, { Component } from 'react'
import {useState,useEffect} from 'react'
import { useNavigate} from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios'
export default function Login(){
    const navigate = useNavigate();
    const [cookie,setCookie] = useCookies('user');
    const [user,setUser] = useState("");
    const [password,setPassword] = useState("");
    
    
    function handleSubmit(e){
      e.preventDefault();
      
      let data = {
        user:user,
        password:password
      }
      axios.post('http://localhost:5000/users/login',data)
      .then(res=>{
        console.log('logged in')
        localStorage.setItem('token',res.data.token)
        console.log('res.data = ',res.data.userr._id)
        localStorage.setItem('id',res.data.userr._id)
        localStorage.setItem('items',JSON.stringify(res.data.userr.cart))
        console.log('token',localStorage.getItem('token'))
        navigate('/home');
      })
      .catch(res=>{
        console.log('wrong username or password')
        return
      })
      
    }
    return (
      <div className='auth-wrapper'>
        <div className='auth-inner'>
      <form>
        <h3>Log In</h3>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={e=>setUser(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={e=>setPassword(e.target.value)}
          />
        </div>

        {/*remember functionalities */}
        {/* <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div> */}

        <div className="d-grid">
          <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
        </div>
        {/* <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p> */}
      </form>
      </div>
      </div>
    )
  }
