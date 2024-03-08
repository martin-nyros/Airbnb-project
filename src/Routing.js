import React from 'react'
import Carousels from './Components/Carousels'

import Footer from './Components/Footer'
import CardImage from './Components/CardImages/CardImage'
import Header from './Components/Header'

function Routing() {
  return (
    <div>
      <Header/>
        <Carousels/>
        <CardImage/>
        <Footer/>
    </div>
  )
}

export default Routing