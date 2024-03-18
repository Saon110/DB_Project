import React from 'react'
import Navbar from '../../components/company/Navbar'
import JobUpdate from '../../components/company/JobUdate'
import Footer from '../../components/Footer'
import '../../css/other.css'

const UpdateJob = () => {
  return (
    <div className='site-content'>
        <Navbar/>
        <div className='container'>
        <JobUpdate/>

        </div>
        <Footer/>
       
    </div>
  )
}

export default UpdateJob