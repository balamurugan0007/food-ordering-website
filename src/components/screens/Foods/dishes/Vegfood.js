import React from 'react'
import {BsFillChatLeftTextFill} from "react-icons/bs";
import {FaRegStar}from "react-icons/fa";
import { Navbar } from '../Navbar';
import "./complete.css";

export const Vegfood = () => {
  return (
    <div>


     <Navbar/>

        <div className='row' id='dishes-row'>
         <div className='col'>
           <div id='pic-card'>
               <img src='https://imagevars.gulfnews.com/2021/01/06/Curd-Rice-_176d6967c16_medium.jpg'
              alt='pic' id='dishes-pic'/>
        
              <ul id='pic-headings'>
                 <li><h4 id='dishes-name'>Curd rice</h4></li>
                <li id='dishes-rating'><FaRegStar id='star-icon'/><p>4.1Ratings</p></li>
             </ul>
                <h5 id='dishes-price'>70.00 Rs/-</h5>
        
               <p id='dishes-description'><BsFillChatLeftTextFill/>It is a very popular Indian dish....</p>
               <button className='btn btn-danger' id='dishes-order-button'>Place order</button>
           </div>
         </div>

         <div className='col'>
           <div id='pic-card'>
               <img src='https://wallpaperaccess.com/full/6340449.jpg'
              alt='pic' id='dishes-pic'/>
        
              <ul id='pic-headings'>
                 <li><h4 id='dishes-name'>Dosa</h4></li>
                <li id='dishes-rating'><FaRegStar id='star-icon'/><p>4.3Ratings</p></li>
             </ul>
                <h5 id='dishes-price'>90.00 Rs/-</h5>
        
               <p id='dishes-description'><BsFillChatLeftTextFill/> Teaste wise it is a awosome dish..</p>
               <button className='btn btn-danger' id='dishes-order-button'>Place order</button>
           </div>
         </div>


         <div className='col-md-3'>
           <div id='pic-card'>
               <img src='https://img.freepik.com/free-photo/veg-biryani-veg-pulav-served-round-brass-bowl-selective-focus_466689-75106.jpg?w=2000'
              alt='pic' id='dishes-pic'/>
        
              <ul id='pic-headings'>
                 <li><h4 id='dishes-name'>Veg briyani</h4></li>
                <li id='dishes-rating'><FaRegStar id='star-icon'/><p>4.7Ratings</p></li>
             </ul>
                <h5 id='dishes-price'>120.00 Rs/-</h5>
        
               <p id='dishes-description'><BsFillChatLeftTextFill/>Madeup with lot of vegtables...</p>
               <button className='btn btn-danger' id='dishes-order-button'>Place order</button>
           </div>
         </div>
     
     
     </div>
    



     
     
     
     <div className='row' id='dishes-row'>
         <div className='col'>
           <div id='pic-card'>
               <img src='https://pipingpotcurry.com/wp-content/uploads/2018/07/Instant-Pot-Potato-Curry-in-Tomato-Sauce-1.jpg'
              alt='pic' id='dishes-pic'/>
        
              <ul id='pic-headings'>
                 <li><h4 id='dishes-name'>Poori</h4></li>
                <li id='dishes-rating'><FaRegStar id='star-icon'/><p>4.0Ratings</p></li>
             </ul>
                <h5 id='dishes-price'>110.00 Rs/-</h5>
        
               <p id='dishes-description'><BsFillChatLeftTextFill/>"Easy and comforting Potato Curry in Tomato Gravy made in the Instant Pot...</p>
               <button className='btn btn-danger' id='dishes-order-button'>Place order</button>
           </div>
         </div>

         <div className='col'>
           <div id='pic-card'>
               <img src='https://cookingfromheart.com/wp-content/uploads/2017/05/Chettinad-Mushroom-Biryani-4.jpg'
              alt='pic' id='dishes-pic'/>
        
              <ul id='pic-headings'>
                 <li><h4 id='dishes-name'>Musrrom briyani</h4></li>
                <li id='dishes-rating'><FaRegStar id='star-icon'/><p>4.8Ratings</p></li>
             </ul>
                <h5 id='dishes-price'>160.00 Rs/-</h5>
        
               <p id='dishes-description'><BsFillChatLeftTextFill/> Super satisfying and comforting  ...</p>
               <button className='btn btn-danger' id='dishes-order-button'>Place order</button>
           </div>
         </div>


         <div className='col-md-3'>
           <div id='pic-card'>
               <img src='https://t3.ftcdn.net/jpg/02/26/20/84/360_F_226208436_5ghCnvflnuIkX4D4TR7wUprWbqN746l0.jpg'
              alt='pic' id='dishes-pic'/>
        
              <ul id='pic-headings'>
                 <li><h4 id='dishes-name'>Idiyappam</h4></li>
                <li id='dishes-rating'><FaRegStar id='star-icon'/><p>4.3Ratings</p></li>
             </ul>
                <h5 id='dishes-price'>90.00 Rs/-</h5>
        
               <p id='dishes-description'><BsFillChatLeftTextFill/>Super satisfying and comforting recipe! ..</p>
               <button className='btn btn-danger' id='dishes-order-button'>Place order</button>
           </div>
         </div>
     
     
     </div>
    </div>
  )
}
