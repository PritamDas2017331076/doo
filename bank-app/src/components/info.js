import React,{useState, useEffect} from 'react'
import axios from 'axios'

const Homepage = () => {
  return (
    <div>
      <p>Email: {localStorage.getItem('bemail')}</p>
      <p>Amount: {localStorage.getItem('bamount')}</p>
      <p>Amount: {localStorage.getItem('bid')}</p>
    </div>
  )
}

export default Homepage