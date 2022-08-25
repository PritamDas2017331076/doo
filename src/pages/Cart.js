import React,{useEffect,useState} from 'react'
import axios from 'axios'

export default function Cart() {
  const [items,setItems] = useState([])
  const [loading,setLoading] = useState(1)
  const [cost,setCost] = useState(0)
  let cto=0
  let updateCost = ()=>{
    items.forEach((val)=>{
      setCost(cost+val.price*val.piece)
    })
  }
  async function getItems(id){
    axios.get(`http://localhost:5000/users/${id}`)
    .then(res=>{
      setItems(res.data.cart)
      items.forEach((val)=>{
        setCost(cost+val.price*val.piece)
        cto=cost
      })
      console.log('cart res data then',)
    })
    .catch(res=>{
      console.log('cart error',res)
    })
    .finally(()=>{
      console.log('loaded items finally',items)
     // updateCost()
      setLoading(0)
    })
  }

  // const elem = 
  // items.map(item=>
  //   <div key={item._id}>
  //     <p>{item.name} ------ {item.piece} -------- {item.price}</p>
  //     Hello world
  //   </div>
  // )
  const elem = ()=> <div><p>Hello world</p><p>Hello world2</p></div>
  useEffect(()=>{
    const id = localStorage.getItem('id')
    getItems(id)
  },[])
  // console.log('elem = ',elem)
  return (
    <div style={{marginTop:120}}>
        {loading==1?<div>Loading</div>:<div><p>price:{items[0].price}</p><p>price :{items[1].price}</p></div>}        
        {loading}
        <p>Total COST : {cto}</p>
        <div className = 'btn btn-danger'>
          BUY
        </div>
    </div>
  )
}
