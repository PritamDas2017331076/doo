import React, { Component ,useState} from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function Bankinfo() {
    const [bankId,setBankId] = useState('')
    const [address,setAddress] = useState('')
    const [phone,setPhone] = useState('')
    const navigate = useNavigate()
    const handleSubmit = (e)=>{
      e.preventDefault()
      const data = {
        accountno:bankId,
        address:address,
        mobile:phone
      }
      console.log('data = ',data)
      axios.patch(`http://localhost:5000/users/${localStorage.getItem('id')}`,data,)
      .then(res=>{
        console.log('bank patch success',res.data)
        localStorage.setItem('bank',true)
      })
      .catch(res=>{
        console.log('bank patch failed',res.data)
      })
      navigate('/home')
    }
    return (
      <div ClassName='auth-wrapper'>
      <div className='auth-inner'>
      <form>
        <h3>Bank Info</h3>

        <div className="mb-3">
          <label>Bank Id</label>
          <input
            type="text"
            className="form-control"
            placeholder="Id provided by the bank"
            onChange = {(e)=>{setBankId(e.target.value)}}

          />
        </div>
        
        <div className="mb-3">
          <label>Address</label>
          <input
            type="text"
            className="form-control"
            placeholder="Location for shipping"
            onChange = {(e)=>{setAddress(e.target.value)}}
            
          />
        </div>

        <div className="mb-3">
          <label>Phone</label>
          <input
            type="test"
            className="form-control"
            placeholder="active phone"
            onChange = {(e)=>{setPhone(e.target.value)}}
            
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
            Proceed
          </button>
        </div>

        {/*<p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p> */}

      </form>
      </div></div>
    )
}
