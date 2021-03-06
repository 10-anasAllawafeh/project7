import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import SimpleMap from './Components/map';
import RatingStars from './Components/RatingStars'


function Contact(){

  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [subject,setSubject]=useState('');
  const [message,setMessage]=useState('');

  const nameHandle=(e)=>{setName(e.target.value)};
  const emailHandle=(e)=>{setEmail(e.target.value)};
  const subHandle=(e)=>{setSubject(e.target.value)};
  const mesaageHandle=(e)=>{setMessage(e.target.value)};

  const mesHandle=(e)=>{
    e.preventDefault();
    sessionStorage.setItem('smessage', 'Thank You, We will contact you soon');
    window.location= '/contact';
  }
    return(

<>
  {/* start banner Area */}
  <section className="about-banner relative">
    <div className="overlay overlay-bg" />
    <div className="container">
      <div className="row d-flex align-items-center justify-content-center">
        <div className="mt-5 about-content col-lg-12">
          <h1 className="text-white">Contact Us</h1>
          <p className="text-white link-nav">
            <a href="/">Home </a>{" "}
            <span className="lnr lnr-arrow-right" />{" "}
            <a href="/contact"> Contact Us</a>
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* End banner Area */}
  {/* Start contact-page Area */}
  <section className="contact-page-area section-gap">
    <div className="container">
      <div className="row">
        <div className="mt-5 col-lg-4 d-flex flex-column address-wrap">
          <div className="single-contact-address d-flex flex-row">
            <div className="icon">
              <span className="lnr lnr-home" />
            </div>
            <div className="contact-details">
              <h5>Jordan, Aqaba</h5>
              <p>Aqaba,Coding Academy By Orange</p>
            </div>
          </div>
          <div className="single-contact-address d-flex flex-row">
            <div className="icon">
              <span className="lnr lnr-phone-handset" />
            </div>
            <div className="contact-details">
              <h5>0778931789</h5>
              <p>Mon to Fri 9 am to 6 pm</p>
            </div>
          </div>
          <div className="single-contact-address d-flex flex-row">
            <div className="icon">
              <span className="lnr lnr-envelope" />
            </div>
            <div className="contact-details">
              <h5>suke@gmail.com</h5>
              <p>Send Us Your Message Anytime!</p>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <form
            className="form-area contact-form text-right"
            id="myForm"
            action=""
            method="post"
          >
            <div className="row">
              <div className="col-lg-6 form-group">
                <input
                  name="name"
                  placeholder="Enter your name"
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'Enter your name'"
                  className="common-input mb-20 form-control"
                  required="true"
                  type="text"
                  onChange={nameHandle}
                />
                <input
                  name="email"
                  placeholder="Enter email address"
                  pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'Enter email address'"
                  className="common-input mb-20 form-control"
                  required="true"
                  type="email"
                  onChange={emailHandle}
                  
                />
                <input
                  name="subject"
                  placeholder="Enter subject"
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'Enter subject'"
                  className="common-input mb-20 form-control"
                  required="true"
                  type="text"
                  onChange={subHandle}
                />
              </div>
              <div className="col-lg-6 form-group">
                <textarea
                  className="common-textarea form-control"
                  name="message"
                  placeholder="Enter Messege"
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'Enter Messege'"
              
                  defaultValue={""}
                  required
                  onChange={mesaageHandle}
                />
              </div>
              <div className="col-lg-12">
              {/* <RatingStars /> */}
                <div className="alert-msg" style={{ textAlign: "left" }} />
                <div><p style={{display:name === '' || email === '' || subject === '' ||message === ''? 'block' : 'none', color:'red'}}>* All feilds Are required</p></div>
                <button
                  className={` primary ${name==='' || email==='' || subject==='' || message===''? 'btn bg-light' :'genric-btn'}`}
                  style={{ float: "right" }}
                  onClick={mesHandle}
                  disabled={name==='' || email==='' || subject==='' || message===''}
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* <div style={{ height: '100vh', width: '100%' }}> */}
      {/* <SimpleMap /> */}
    {/* </div> */}
    </div>
  </section>
  {/* End contact-page Area */}

  <div className='container mb-5'>
      <iframe height={400}width={1100}
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27764.911935385284!2d35.01916159171958!3d29.556733703948556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sjo!4v1657047509224!5m2!1sen!2sjo"
          frameBorder={0}
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex={0}
        />
      </div>
 
</>


        )
    }
    export default Contact;    
