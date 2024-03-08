import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
function NewWeek() {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
        <section className='container'>
        <h2>New this week</h2>
        <Carousel style={{width:"100%", height:"380px",backgroundColor:"black"}} activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
       <img src="https://images.pexels.com/photos/9351229/pexels-photo-9351229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{width:"100%", height:"420px"}} alt=''/>
        <Carousel.Caption className='mb-5'> 
        <p>
          collection
          </p>
          <h3>Most popular around the world</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src='https://a0.muscache.com/im/pictures/2fe40f4f-5ea3-432f-9fbd-e2ce3c6c3855.jpg?im_w=1200' style={{width:"100%", height:"420px"}} alt=''/>
        <Carousel.Caption className='mb-5'>
        <p>
          collection
          </p>
          <h3>Easy for itinerery planning</h3>
      
</Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src='https://a0.muscache.com/im/pictures/bcbd20bb-1654-4ea2-a86c-2cf25666f3b6.jpg?im_w=720' style={{width:"100%", height:"420px"}} alt=''/>
        <Carousel.Caption className='mb-5'>
        <p>
          collection
          </p>
          <h3>Great for team building</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        
        </section>
    </div>
  )
}

export default NewWeek