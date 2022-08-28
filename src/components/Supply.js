import React,{useState, useEffect} from 'react'
import image from '../images/cross.jpg'
import axios from 'axios'
import './Supply.css'

const Supply = () => {
  const [supply,setSupply]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:5000/supplies')
            .then(res => {
                console.log(res.data) 
                setSupply(res.data)
           }) ;
  },[])
  const deletedata = (id)=>{
    axios.delete(`http://localhost:5000/supplies/${id}`)
        .then(res => {
            console.log(res.data) 
            window.location.href='/supply'
        }) ;

  }
  console.log(supply)
  return (
    <div className="data">
        <ul>
            {
                supply.map(item => (
                <li key={item._id}  className="border">
                    {
                        console.log(JSON.stringify(item))
                    }
                    <div style={{display:'inline-flex'}}>
                    <div>
                    {
                        item.list.map(it=>(
                            <h3>{it.desc}---{it.piece}</h3>
                        ))
                    }
                    <h2>Address: {item.address}</h2>
                    <h2>Mobile: {item.mobile}</h2>
                    </div>
                    <div style={{marginLeft:50}}>
                    <img src={image} alt="Example2" width="10" height="10" onClick={()=>deletedata(item._id)} />
                    </div>
                    </div>
                </li>))
            }
        </ul>
    </div>
  )
}

export default Supply