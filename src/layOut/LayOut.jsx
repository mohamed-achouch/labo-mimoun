import React from 'react'
import Routers from '../routes/Routers'
import Header from '../components/Header'
import Footer from '../components/Footer'

const LayOut = () => {
  return (
    <div>
        <Header/>
        <div className=' pt-[100px]'>
            <Routers/>
        </div>
        <Footer/>
    </div>
  )
}

export default LayOut