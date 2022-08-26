import Navigation from './navigation'
import LoginNavigation from './loginNavigation'
import React,{useState, useEffect} from 'react'

export default function Header(){
    const [token,setToken]=useState('')
    useEffect(() => {
        console.log('Fruit', token);
      }, [token])
    if(localStorage.getItem('token')==='') {
        return(
            <LoginNavigation/>
        )
    }
    else
    {
        return(
            <Navigation/>
        )
    }
}