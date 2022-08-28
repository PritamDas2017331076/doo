import React, { Component,useState } from 'react'
import axios from 'axios'
import { useNavigate} from 'react-router-dom';

export default function SignUp(){
  const [user,setUser] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('') 
  const navigate = useNavigate();

  const host = 'http://localhost:5001'
    const handleSubmit = (e)=>{
      e.preventDefault()
      const obj = {
        user:user,
        email:email,
        password:password,
      }
      axios.post(`${host}/users/add`,obj)
      .then((res)=>{
        console.log('res',res)
        localStorage.setItem('btoken',res.data.token)
        console.log('res.data = ',res.data.newUser._id)
        localStorage.setItem('bid',res.data.newUser._id)
        localStorage.setItem('bamount',res.data.newUser.amount)
        localStorage.setItem('bemail',res.data.newUser.email)
        localStorage.setItem('buser',res.data.newUser.user)
        console.log('token',localStorage.getItem('token'))
        navigate('/info');
      })
      .catch((res)=>{
        console.log(`user post error `,res)
        console.log('data before error',obj)
      })
    }
    return (
      <div ClassName='auth-wrapper'>
      <div className='auth-inner'>
      <form>
        <h3>Sign Up</h3>

        {/* <div className="mb-3">
          <label>Full name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div> */}

        <div className="mb-3">
          <label>Username</label>
          <input type="text" className="form-control" placeholder="username" onChange={(e)=>setUser(e.target.value)}/>
        </div>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
      </div>
      </div>
    )
}

