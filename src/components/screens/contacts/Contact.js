import React from 'react'
import "./contact.css"
import {FaGoogle,FaGithub,FaLinkedinIn} from "react-icons/fa"

export const Contact = () => {
  return (
    <div>
        <div className='d-flex justify-content-center'>
            <img src='https://img.freepik.com/premium-vector/anonymous-user-circle-icon-vector-illustration-flat-style-with-long-shadow_520826-1931.jpg'
            alt='user-png' id='user-io'/>

        </div>
        <div >
            <h2 className='d-flex justify-content-center' id='name'>Balamurugan</h2>
            <h4 className='d-flex justify-content-center' id="work">React Developer</h4>
        </div>

        <div>
            <h5 id='dev-info'><FaGoogle /> balamurugan.k.02437@gmail.com</h5>
            <h5 id='dev-info'><FaGithub/> <a href='https://github.com/balamurugan0007'>https://github.com/balamurugan0007</a></h5>
            <h5 id='dev-info'> <FaLinkedinIn/> <a href='https://www.linkedin.com/in/bala-murugan-20794b252'>https://www.linkedin.com/in/bala-murugan-20794b252</a> </h5>
        </div>




    </div>
  )
}
