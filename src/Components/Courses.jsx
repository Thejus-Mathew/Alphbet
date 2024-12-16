import React, { useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { Button, Modal } from 'react-bootstrap';

function Courses() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        cssEase: "ease-in-out",
        swipeToSlide:true,
        responsive: [
            {
              breakpoint: 1280,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    };
  return (
    <div className='container mb-5 w-100'>
      <h2 className='logoColor'>Our Services</h2>
      <div className="slider-container silderContainer">
        <Slider {...settings} className='py-1'>
            <div className="p-2" onClick={handleShow}>
                <div className='card rounded customCard' style={{overflow:"hidden"}}>
                    <img src="https://mdbootstrap.com/img/new/standard/nature/184.webp" width={"100%"} alt="" />
                    <h5 className='my-1 text-center'>Tuition Classes</h5>
                </div>
            </div>
            <div className="p-2" onClick={handleShow}>
                <div className='card rounded customCard' style={{overflow:"hidden"}}>
                    <img src="https://mdbootstrap.com/img/new/standard/nature/184.webp" width={"100%"} alt="" />
                    <h5 className='my-1 text-center'>Home Tuitions</h5>
                </div>
            </div>
            <div className="p-2" onClick={handleShow}>
                <div className='card rounded customCard' style={{overflow:"hidden"}}>
                    <img src="https://mdbootstrap.com/img/new/standard/nature/184.webp" width={"100%"} alt="" />
                    <h5 className='my-1 text-center'>Online Tuitions</h5>
                </div>
            </div>
            <div className="p-2" onClick={handleShow}>
                <div className='card rounded customCard' style={{overflow:"hidden"}}>
                    <img src="https://mdbootstrap.com/img/new/standard/nature/184.webp" width={"100%"} alt="" />
                    <h5 className='my-1 text-center'>Individual Tuitions</h5>
                </div>
            </div>
            <div className="p-2" onClick={handleShow}>
                <div className='card rounded customCard' style={{overflow:"hidden"}}>
                    <img src="https://mdbootstrap.com/img/new/standard/nature/184.webp" width={"100%"} alt="" />
                    <h5 className='my-1 text-center'>Spoken English Classes</h5>
                </div>
            </div>
        </Slider>
        <div id="contact"></div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Course heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img src="https://mdbootstrap.com/img/new/standard/nature/184.webp" width={"100%"} alt="" />
            <p className='my-3'>Course description</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Courses
