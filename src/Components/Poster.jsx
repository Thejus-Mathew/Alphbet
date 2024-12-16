import React from 'react'
import poster from '../assets/poster.jpg'
import poster1 from '../assets/poster1.jpg'
import poster2 from '../assets/poster2.jpg'

function Poster() {
  return (
    <>
      <div id='header' className='my-5 container p-0 poster-container'>
        <div className="row w-100">
            <div className="col-sm-0 col-md d-flex justify-content-center align-items-center">
                <img src={poster1} className='poster1' alt="" />
            </div>
            <div className="col position-relative">
                <div className="position-absolute blueposter"></div>
                <div className="position-absolute whiteposter"></div>
                <img src={poster} className='poster' alt="" />
            </div>
            <div className="col-sm-0 col-md d-flex justify-content-center align-items-center">
                <img src={poster2} className='poster1' alt="" />
            </div>
        </div>
        <div id="services"></div>
      </div>
    </>
  )
}

export default Poster
