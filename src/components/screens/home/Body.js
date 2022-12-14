import React from 'react'
import "./Body.css";
import { Feedback } from './Feedback';
import { FaGlobe,FaUsers} from "react-icons/fa";

import { BsFillHandThumbsUpFill} from "react-icons/bs";

export const Body = () => {
  return (
    <div className='container-fluid'>
        <div className='input'>
          
          <div className='img-responsive-1'>
            <img className="img-responsive" src="https://wallpapercave.com/wp/wp8329822.jpg"
                alt='sample'></img>


              
                <h2 id='banner'>FOOD CORNER</h2>
                <p id='banner-para'>
                  Order your daily foods using Foodcorner. Delicious and healthy foods are available in the FoodCarner
                </p>
               

          
           
          
          </div>
      </div>


      <div className='jion'>
      <h3 id='head'>Jion Foodcorner to grow your Business<button id='join' className='btn btn-danger'>Jion</button></h3>
      
        <div className='row'>
          
          <div className='col-md-3'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8NfQgrepQHu2zqRDRqLFiTplyrk4MVmtE-qlAuHJ4QyhvN9EC14tFvbeYHlN0E2CZk_8&usqp=CAU' alt='card' id='pic'></img>
            <h6 id='text'>Food Shop</h6>
          </div>
          <div className='col-md-3'>
            <img src='https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p.jpg' id='pic'alt='card'/>
            <h6 id='text'>coffee Shop</h6>
          </div>
          <div className='col-md-3'>
          <img src='https://www.sharmispassions.com/wp-content/uploads/2017/04/PistaIcecream2.jpg' alt='card' id='pic'></img>
          <h6 id='text'>Icecream Shop</h6>
          </div>
          <div className='col-md-3'>
          <img src='https://img.veenaworld.com/wp-content/uploads/2022/07/Indian-Sweets-800x530.webp' alt='card' id='pic'></img>
          <h6 id='text'>Sweets Shop</h6>
          </div>
        </div>


       
        
      </div>




      
      
      

      
      
      
      
      
      
      <div>
        <div className='row' id="des">
           <div className='col-md-6'>
            
            <img className='img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRobLhNI4KSoImK6U8SaKrAVLrXkpWnsdXYcA&usqp=CAU'
            alt=''/>

           </div>
           <div className='col'>
            <div className='para'>
                 <h2 className='text-primary'> FoodCorner ?</h2>
                 <h4><BsFillHandThumbsUpFill/>  Complete Online Solution</h4>
                  <p>Our Online Ordering Solution allows you to take orders through Your own Website, 
                    Your Own Mobile App, And through FoodChow website and Mobile App.</p>
           </div>
           <div>
            
            <h4><FaGlobe/>  Worldwide Support</h4>
            <p>FoodChow support is available worldwide. Contact our support 
              team and we'll connect you to an expert to get your issue resolved within 24 Business hours.</p>
           </div>
           <div>
            
            <h4><FaUsers/>  Single & Mutliple Oultets</h4>
            <p>Do you have your restaurant in multiple locations? FoodChow Multi-outlet 
              food ordering solution will help you manage all these outlets with Super Admin functionality.</p>
           </div>

          </div>
            </div>
        </div>









        <div className='jion'>
      <h3 id='client'>Some of our clients using FoodCarner for Restaurant Marketing</h3>
        <div className='row'>
          
          <div className='col-md-3'>
            <img src='https://aabsweets.com/assets/img/logo-a2b.png' alt='card' id='pic'></img>
          
          </div>
          <div className='col-md-3'>
            <img  src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6a5c3914431623.5cb49a0e0ec61.jpg" id='pic' alt='card'/>
          </div>
          <div className='col-md-3'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVGSyZRk1lWc67UppI9tHkq29yl62gFlT7I_C0zZbHsWmdPFidvfhMhSs4vEAZJroybtY&usqp=CAU" id='pic' alt='card'/>
          </div>
          <div className='col-md-3'>
            <img src="https://media-exp1.licdn.com/dms/image/C4D03AQFwvFjCaZoJkw/profile-displayphoto-shrink_800_800/0/1608713983508?e=2147483647&v=beta&t=PSphxYQmE9A7LJ-TU1N-R7IY1gDzoEx89YLaTbE9lNQ" id='pic' alt='card'/>
          </div>
        </div>


        <div className='row' id='second-row'>
          
        
          <div className='col-md-3'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSde6dV74QNyUP9ltU7zpZKJapMKgKOwKpWiw&usqp=CAU" id='pic' alt='card'/>
          </div>
          <div className='col-md-3'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY0pEUPi8FpARxwQXBcSUPwcB59g4GEvw9cQ&usqp=CAU" id='pic' alt='card'/>
          </div>
          <div className='col-md-3'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiNJ-k4mHwmepsypWphzFgiam0-cB-RiDghQ&usqp=CAU" id='pic' alt='card'/>
          </div>
          <div className='col-md-3'>
            <img src='https://upload.wikimedia.org/wikipedia/sco/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png' alt='card' id='pic'></img>
          
          </div>
        </div>
        
      </div>

      


     
    <Feedback/>
    </div>
  )
}

