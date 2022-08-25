import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img from '../images/laptop.jpeg'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
export default function Products(props) {
  // console.log(props)
  const navigate = useNavigate()

  const handleClick = (b,e)=>{
    e.preventDefault()
    navigate('/product-info',{state:b});
  }
  const elem = 
    props.list.map(item=>
      <Card style={{ width: '18rem' }}>
        <Card.Img src = {img}/>
        <Card.Body>
          <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
          <Button variant="primary" onClick={(e)=>handleClick(item,e)}>Go somewhere</Button>
          <Card.Title>{item.name}</Card.Title>
        </Card.Body>
      </Card>
    )
  return (
    <div className='container' style={{backgroundColor:'cyan'}}>
      <h3>Products</h3>
      <div className='d-flex justify-content-between flex-wrap'>
        {elem}
        {/* {props.list[0].name} */}
      </div>
    </div>
  )
}
