import React from 'react'
import Navbar from '../../components/company/Navbar'
import InterviewList from '../../components/company/InterviewList'
import Footer from '../../components/Footer'
import '../../css/other.css'

const Interviews = () => {
  return (
    <div className='site-content'>
        <Navbar/>
        <div className='container'>
        <InterviewList /> 

        </div>
        <Footer/>
    </div>
  )
}

export default Interviews