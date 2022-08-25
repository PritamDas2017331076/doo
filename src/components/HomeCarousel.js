import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import lp from '../images/laptop.jpeg'
export default function HomeCarousel() {
    const delay=800
    return (
    <div className='d-flex justify-content-center mt-5 ' style={{padding:10}} >
    <Carousel variant='dark' style={{width:1000}}>
        <Carousel.Item interval={delay}>
            <img
                className='d-block w-75'
                src={lp}
                alt='first slide'
            />
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Awesome Awesome</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={delay}>
            <img
                className='d-block w-75'
                src={lp}
                alt='second slide'
            />
            <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Awesome Awesome</p>
            </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item interval={delay}>
            <img
                className='d-block w-75'
                src={lp}
                alt='Third slide'
            />
            <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Awesome Awesome</p>
            </Carousel.Caption>
        </Carousel.Item>        
    </Carousel>
    </div>
    )
}
