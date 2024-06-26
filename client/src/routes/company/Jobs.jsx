import React from 'react'
// import { useParams } from 'react-router-dom'
import Navbar from '../../components/company/Navbar'
import JobList from '../../components/company/JobList'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer'
import '../../css/other.css'


const Jobs = () => {

  // const { id } = useParams()


  return (
    <div className='site-content'>
        <Navbar/>
        <div className='container'>
        <JobList/>
        <h1>
  <Link
    to={`/Employer/addjob`}
    style={{
      display: 'inline-block',
      padding: '8px 16px', // Increased padding
      backgroundColor: '#000',
      color: '#fff',
      textDecoration: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      border: 'none',
      outline: 'none',
      boxShadow: 'none',
      fontSize: '16px', // Increased font size
    }}
  >
    Add a job
  </Link>
</h1>



</div>
<Footer/>
    </div>
  )
}

export default Jobs