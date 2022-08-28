import React,{useEffect,useState} from 'react'
import axios from 'axios'

export default function Cart() {
  const obj=localStorage.getItem('items')
  console.log(obj)
  const items=JSON.parse(obj)
  console.log(items)
  const [loading,setLoading] = useState(0)
  const [cost,setCost] = useState(0)
  let updateCost = ()=>{
    let cto=0
    items.forEach((val)=>{
      cto+=(cost+val.price*val.piece)
    })
    return cto
  }

  let ret=(ele)=>{
    return(
      <div>
        <p>name: {ele.desc}</p>
        <p>piece: {ele.piece}</p>
      </div>
    )
  }
  const submit = ()=>{

    const id=localStorage.getItem('id')
    const acc=localStorage.getItem('acc')
    const chg={
      cost:updateCost()
    }
    axios.patch(`http://localhost:5001/users/transaction/${acc}`,chg)
      .then(res=>{
        console.log('successfully updated',res.data)
        const chh={ 
          cart:[]
        }
        axios.patch(`http://localhost:5000/users/${id}`,chh)
          .then(res=>{
            console.log('successfully updated',res.data,'id',id)
            const oj=[]
            localStorage.setItem('items',JSON.stringify(oj))
          })
          .catch(err=>{
            console.log('error',err)
          })
          const obj= {
            list: items,
            id: id,
            mobile: localStorage.getItem('mobile'),
            address: localStorage.getItem('address')
          }
      
          axios.post(`http://localhost:5000/supplies/add`,obj)
            .then(res=>{
              console.log('successfully added',res.data)
              window.location.href='/cart'
            })
            .catch(err=>{
              console.log('error',err)
            })
    
      })
      .catch(err=>{
        console.log('error',err)
        alert('remove some product')
      })
    // const chh={ 
    //   cart:[]
    // }
    // axios.patch(`http://localhost:5000/users/${id}`,chh)
    //   .then(res=>{
    //     console.log('successfully updated',res.data,'id',id)
    //     const oj=[]
    //     localStorage.setItem('items',JSON.stringify(oj))
    //   })
    //   .catch(err=>{
    //     console.log('error',err)
    //   })

    // const obj= {
    //   list: items,
    //   id: id,
    //   mobile: localStorage.getItem('mobile'),
    //   address: localStorage.getItem('address')
    // }

    // axios.post(`http://localhost:5000/supplies/add`,obj)
    //   .then(res=>{
    //     console.log('successfully added',res.data)
    //   })
    //   .catch(err=>{
    //     console.log('error',err)
    //   })
    //window.location.href='/cart'


  }
  return (
    <div style={{marginTop:120}}>
        {
          items.map(item => (
              <div key={item._id}>
                <p>{item.desc}---{item.piece}</p>
              </div>
                       
          ))
        }
        <p>Total COST : {updateCost()}</p>
        <div className = 'btn btn-danger' onClick={submit}>
          BUY
        </div>
    </div>
  )
}
