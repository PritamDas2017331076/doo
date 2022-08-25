import React from 'react'
import Navigation from '../components/loginNavigation';
import HomeCarousel from '../components/HomeCarousel';
import Login from '../components/login';
import Products from '../components/products';
import { laptops } from '../data/products';
function Homepage() {
  const obj={
    name:'asdfa',
    price:1231,
    size:'xl'
  }
  return (
    <div >
      <p>Homepage</p>
      <HomeCarousel/>
      <Products name='laptops' list={laptops}/>
    </div>
  )
}

export default Homepage;