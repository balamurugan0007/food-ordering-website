import React from 'react'
import {BsFillChatLeftTextFill} from "react-icons/bs";
import {FaRegStar}from "react-icons/fa";

import "./complete.css";
import { Navbar } from '../Navbar';

export const Nonveg = () => {
  return (
    <div>
    <Navbar/>


<div className='row' id='dishes-row'>
         <div className='col'>
           <div id='pic-card'>
               <img src='https://theyummydelights.com/wp-content/uploads/2018/09/mutton-biryani-recipe-500x450.jpg'
              alt='pic' id='dishes-pic'/>
        
              <ul id='pic-headings'>
                 <li><h4 id='dishes-name'>Hyderabadi Mutton briyani</h4></li>
                <li id='dishes-rating'><FaRegStar id='star-icon'/><p>4.8Ratings</p></li>
             </ul>
                <h5 id='dishes-price'>360.00 Rs/-</h5>
        
               <p id='dishes-description'><BsFillChatLeftTextFill/>It is a very popular Indian dish....</p>
               <button className='btn btn-danger' id='dishes-order-button'>Place order</button>
           </div>
         </div>

         <div className='col'>
           <div id='pic-card'>
               <img src='https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Donna_George/Kerala_Chicken_Roast_Recipe-11_400.jpg'
              alt='pic' id='dishes-pic'/>
        
              <ul id='pic-headings'>
                 <li><h4 id='dishes-name'>kerala chiken roast</h4></li>
                <li id='dishes-rating'><FaRegStar id='star-icon'/><p>4.5Ratings</p></li>
             </ul>
                <h5 id='dishes-price'>160.00 Rs/-</h5>
        
               <p id='dishes-description'><BsFillChatLeftTextFill/>  It is a Kerala side dish....</p>
               <button className='btn btn-danger' id='dishes-order-button'>Place order</button>
           </div>
         </div>


         <div className='col-md-3'>
           <div id='pic-card'>
               <img src='https://www.allrecipes.com/thmb/iYvCr914MOIZ8lAI0-9DESXhbdI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/4546075-spicy-chicken-noodles-Chef-John-1x1-1-f1d73f027f804fe8aa8c87248c93a3ba.jpg'
              alt='pic' id='dishes-pic'/>
        
              <ul id='pic-headings'>
                 <li><h4 id='dishes-name'>Chicken Noodles</h4></li>
                <li id='dishes-rating'><FaRegStar id='star-icon'/><p>4.3Ratings</p></li>
             </ul>
                <h5 id='dishes-price'>220.00 Rs/-</h5>
        
               <p id='dishes-description'><BsFillChatLeftTextFill/> Teaste wise it is a awosome dish....</p>
               <button className='btn btn-danger' id='dishes-order-button'>Place order</button>
           </div>
         </div>
     
     
     </div>
    



     
     
     
     <div className='row' id='dishes-row'>
         <div className='col'>
           <div id='pic-card'>
               <img src='https://img.freepik.com/free-photo/garlic-soup-topped-with-croutons-bowl-wooden-table_123827-20918.jpg?w=2000'
              alt='pic' id='dishes-pic'/>
        
              <ul id='pic-headings'>
                 <li><h4 id='dishes-name'>Fish Gravy</h4></li>
                <li id='dishes-rating'><FaRegStar id='star-icon'/><p>4.0Ratings</p></li>
             </ul>
                <h5 id='dishes-price'>170.00 Rs/-</h5>
        
               <p id='dishes-description'><BsFillChatLeftTextFill/>Fish Gravy is a delicious and healthy Continental soup ...</p>
               <button className='btn btn-danger' id='dishes-order-button'>Place order</button>
           </div>
         </div>

         <div className='col'>
           <div id='pic-card'>
               <img src='https://healthyrecipesblogs.com/wp-content/uploads/2012/12/spicy-shrimp-featured-2021.jpg'
              alt='pic' id='dishes-pic'/>
        
              <ul id='pic-headings'>
                 <li><h4 id='dishes-name'>Shrimp fry</h4></li>
                <li id='dishes-rating'><FaRegStar id='star-icon'/><p>3.9Ratings</p></li>
             </ul>
                <h5 id='dishes-price'>90.00 Rs/-</h5>
        
               <p id='dishes-description'><BsFillChatLeftTextFill/> Super satisfying and comforting  ...</p>
               <button className='btn btn-danger' id='dishes-order-button'>Place order</button>
           </div>
         </div>


         <div className='col-md-3'>
           <div id='pic-card'>
               <img src='https://mariasmenu.com/wp-content/uploads/Mutton-Pepper-Roast-500x500.png'
              alt='pic' id='dishes-pic'/>
        
              <ul id='pic-headings'>
                 <li><h4 id='dishes-name'>Mutton pepper fry</h4></li>
                <li id='dishes-rating'><FaRegStar id='star-icon'/><p>4.3Ratings</p></li>
             </ul>
                <h5 id='dishes-price'>160.00 Rs/-</h5>
        
               <p id='dishes-description'><BsFillChatLeftTextFill/> A full of chiken  with a spicy masalas...</p>
               <button className='btn btn-danger' id='dishes-order-button'>Place order</button>
           </div>
         </div>
     
     
     </div>


    </div>
  )
}
