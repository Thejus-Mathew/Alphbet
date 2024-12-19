import React from 'react'
import contact from '../assets/contact.jpg'

function Contact() {
  return (
    <div className='container mb-5'>
      <h2 className='logoColor mt-5'>Contact Us</h2>
      <div style={{backgroundColor:"#01a898",color:"white"}}>
        <div className='d-flex justify-content-center'>
            <img src={contact} className='contactImage' alt="" />
        </div>
        <div className="row mt-5">
            <div className="col-sm-0 col-md-2"></div>
            <div className="col-sm-12 col-md-4 d-flex flex-column align-items-center flex-column pb-3">
                <h5 className='border-bottom'>Address Details</h5>
                <p><i class="fa-solid fa-house"></i> Address Line 1</p>
                <p><i class="fa-solid fa-house"></i> Address Line 1</p>
                <p><i class="fa-solid fa-location-dot"></i> Korome</p>
            </div>
            <div className="col-sm-12 col-md-4 d-flex flex-column align-items-center flex-column pb-3">
                <h5 className='border-bottom'>Contact Details</h5>
                <a className='text-light' href="tel:7025606557"><p><i class="fa-solid fa-phone"></i> 7025606557</p></a>
                <a className='text-light' href="tel:6238124860"><p><i class="fa-solid fa-phone"></i> 6238124860</p></a>
                <a className='text-light' href="mailto:dummy@gmail.com"><p><i class="fa-solid fa-envelope"></i> dummy@gmail.com</p></a>
            </div>
            <div className="col-sm-0 col-md-2"></div>
        </div>
      </div>
    </div>
  )
}

export default Contact
