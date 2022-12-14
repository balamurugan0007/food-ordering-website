import React from 'react'
import {BsFillChatLeftTextFill} from "react-icons/bs";
import {FaRegStar}from "react-icons/fa";
import { Navbar } from '../Navbar';

import "./complete.css";

export const FastFoods = () => {
  return (
    <div>

    <Navbar/>
        
<div className='row' id='dishes-row'>
         <div className='col'>
           <div id='pic-card'>
               <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIVP59cW8KOnxY0hv8U3yQqMm0xU85dJyVfw&usqp=CAU'
              alt='pic' id='dishes-pic'/>
        
              <ul id='pic-headings'>
                 <li><h4 id='dishes-name'> Burger</h4></li>
                <li id='dishes-rating'><FaRegStar id='star-icon'/><p>4.6Ratings</p></li>
             </ul>
                <h5 id='dishes-price'>140.00 Rs/-</h5>
        
               <p id='dishes-description'><BsFillChatLeftTextFill/>It is a very popular Indian soup....</p>
               <button className='btn btn-danger' id='dishes-order-button'>Place order</button>
           </div>
         </div>

         <div className='col'>
           <div id='pic-card'>
               <img src='https://imgk.timesnownews.com/story/PIZZA-STOCK.jpg'
              alt='pic' id='dishes-pic'/>
        
              <ul id='pic-headings'>
                 <li><h4 id='dishes-name'>Pizza</h4></li>
                <li id='dishes-rating'><FaRegStar id='star-icon'/><p>4.8Ratings</p></li>
             </ul>
                <h5 id='dishes-price'>199.00 Rs/-</h5>
        
               <p id='dishes-description'><BsFillChatLeftTextFill/>peoples favourite dish ..</p>
               <button className='btn btn-danger' id='dishes-order-button'>Place order</button>
           </div>
         </div>


         <div className='col-md-3'>
           <div id='pic-card'>
               <img src='https://cookingtv-channel.com/wp-content/uploads/27864010_1770129776359544_6404450636733087744_n.jpg'
              alt='pic' id='dishes-pic'/>
        
              <ul id='pic-headings'>
                 <li><h4 id='dishes-name'>Hot Dog</h4></li>
                <li id='dishes-rating'><FaRegStar id='star-icon'/><p>4.7Ratings</p></li>
             </ul>
                <h5 id='dishes-price'>90.00 Rs/-</h5>
        
               <p id='dishes-description'><BsFillChatLeftTextFill/>Madeup with lot of beef...</p>
               <button className='btn btn-danger' id='dishes-order-button'>Place order</button>
           </div>
         </div>
     
     
     </div>
    



     
     
     
     <div className='row' id='dishes-row'>
         <div className='col'>
           <div id='pic-card'>
               <img src='https://www.whiskaffair.com/wp-content/uploads/2021/05/Gochujang-Noodles-2-3.jpg'
              alt='pic' id='dishes-pic'/>
        
              <ul id='pic-headings'>
                 <li><h4 id='dishes-name'>Noodles</h4></li>
                <li id='dishes-rating'><FaRegStar id='star-icon'/><p>4.6Ratings</p></li>
             </ul>
                <h5 id='dishes-price'>160.00 Rs/-</h5>
        
               <p id='dishes-description'><BsFillChatLeftTextFill/>"Easy and Instant Pot...</p>
               <button className='btn btn-danger' id='dishes-order-button'>Place order</button>
           </div>
         </div>

         <div className='col'>
           <div id='pic-card'>
               <img src='https://www.healthifyme.com/blog/wp-content/uploads/2022/07/shutterstock_1927479248-1.jpg'
              alt='pic' id='dishes-pic'/>
        
              <ul id='pic-headings'>
                 <li><h4 id='dishes-name'>Frech fries</h4></li>
                <li id='dishes-rating'><FaRegStar id='star-icon'/><p>4.8Ratings</p></li>
             </ul>
                <h5 id='dishes-price'>90.00 Rs/-</h5>
        
               <p id='dishes-description'><BsFillChatLeftTextFill/> Super satisfying and comforting  ...</p>
               <button className='btn btn-danger' id='dishes-order-button'>Place order</button>
           </div>
         </div>


         <div className='col-md-3'>
           <div id='pic-card'>
               <img src='https://www.kitchensanctuary.com/wp-content/uploads/2020/04/Chicken-Fried-Rice-square-FS-.jpg'
              alt='pic' id='dishes-pic'/>
        
              <ul id='pic-headings'>
                 <li><h4 id='dishes-name'>Chicken Rice</h4></li>
                <li id='dishes-rating'><FaRegStar id='star-icon'/><p>4.3Ratings</p></li>
             </ul>
                <h5 id='dishes-price'>190.00 Rs/-</h5>
        
               <p id='dishes-description'><BsFillChatLeftTextFill/>A quick recipe for takeaway-style chicken fried rice.</p>
               <button className='btn btn-danger' id='dishes-order-button'>Place order</button>
           </div>
         </div>
     
     
     </div>
    </div>
  )
}
