import React,{useState} from 'react'
import { useLocation } from 'react-router-dom'
import img from '../images/laptop.jpeg'
import axios from 'axios'
export default function ProductInfo(props) {

  const { state } = useLocation();
  const [count,setCount] = useState(0)
  const [amount,setAmount] = useState(0)
  // console.log('product info',state)
  const desc = (obj)=>{
    return Object.keys(obj).map((keyName, i) => (
      <div style={{textAlign:'left'}} key={i}>
          <span className="input-label">{keyName}: {obj[keyName]}</span>
      </div>
    ))
  }
  const incrementAmount = ()=>{
    if(count<30){
      setAmount(amount+state.price)
      setCount(count+1)
    }
  }
  const decrementAmount = ()=>{
    if(count>0)
      setAmount(amount-state.price)
      setCount(count-1)
  }
  const addToCart = ()=>{
    const obj = {
      desc:state.name,
      price:amount,
      piece:count
    }
    console.log('product info obj',obj)
    console.log('id',localStorage.getItem('id'))
    axios.patch(`http://localhost:5000/users/addcart/${localStorage.getItem('id')}`,obj)
    .then(res=>{
      console.log('add to cart success',res.data)
      console.log('cart list',res.data.cart)
      const data=JSON.stringify(res.data.cart)
      localStorage.setItem('items',data);
      console.log('items',localStorage.getItem('items'))

    })
    .catch(res=>{
      console.log('add to cart failed',res)
    })
  }
  // this.updateCost()
  return (
    <div>
    <div style={{paddingTop:80}} className='d-flex justify-content-center'>
      <div style={{width:300,height:300,backgroundColor:'red'}}>
        <img src={img}/>  
        <p>Price: {state.price} TK</p>
      </div>
      <div style={{width:400,height:300,backgroundColor:'green',marginLeft:150,padding:30}}>
        ProductInfo
        {desc(state.description)}
      </div>
    </div>
    <div style={{display:'flex',backgroundColor:'cyan',margin:10}}>
      <div style={{width:600}}>
        <span>Qty:</span>
        <span className='btn btn-info' style={{padding:15}} onClick={incrementAmount}>+</span>
        <span style={{padding:15}}>{count}</span>
        <span className='btn btn-info' style={{padding:15}}onClick={decrementAmount}>-</span>
        <span> Total: {amount}</span>
      </div>
      <div className='btn btn-success' style={{marginLeft:50}} onClick={addToCart}>Add to cart</div>
    </div>
    </div>
  )
}
