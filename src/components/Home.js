import React from 'react'
import { useState, useContext } from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
    const [title, setTitle] = useState('')
    
    return (
        <div>
            <p>Login Form</p>
            <form  className = 'form'>

                <div>
                <input
                   type='text'
                   placeholder='Enter Title'
                   value={title}
                   onChange={(e) => setTitle(e.target.value)}
                />
                </div>
                <button type='submit' value='submit'><Link to='/editor'>Submit</Link></button>
            </form>
        </div>
    )
}

export default Home
