
import {Navbar }from "./Navbar";
import {BsFillChatLeftTextFill} from "react-icons/bs";
import {FaRegStar}from "react-icons/fa";
import "./dishes/complete.css"




import React from 'react'



export const Foods = () => {
  return (
    <div>

     <Navbar/>




     <div className='row' id='dishes-row'>
         <div className='col'>
           <div id='pic-card'>
               <img src='https://vismaifood.com/storage/app/uploads/public/e12/7b7/127/thumb__700_0_0_0_auto.jpg'
              alt='pic' id='dishes-pic'/>
            
        
              <ul id='pic-headings'>
                 <li><h4 id='dishes-name'>Chiken Briyani</h4></li>
                <li id='dishes-rating'><FaRegStar id='star-icon'/><p>4.8Ratings</p></li>
             </ul>
                <h5 id='dishes-price'>290.00 Rs/-</h5>
        
               <p id='dishes-description'><BsFillChatLeftTextFill/> The most of the peoples are like the dish....</p>
               <button className='btn btn-danger' id='dishes-order-button'>Place order</button>
           </div>
         </div>

         <div className='col'>
           <div id='pic-card'>
               <img src='https://media.istockphoto.com/photos/barbecued-salmon-fried-potatoes-and-vegetables-on-wooden-background-picture-id1214416414?b=1&k=20&m=1214416414&s=170667a&w=0&h=FZFYYlT2R5BsZK-7433EcdBGkEI43M-HIxnM-FmuEv8='
              alt='pic' id='dishes-pic'/>
        
              <ul id='pic-headings'>
                 <li><h4 id='dishes-name'>Fish curry</h4></li>
                <li id='dishes-rating'><FaRegStar id='star-icon'/><p>4.2Ratings</p></li>
             </ul>
                <h5 id='dishes-price'>160.00 Rs/-</h5>
        
               <p id='dishes-description'><BsFillChatLeftTextFill/> Its a sea food very delesious one....</p>
               <button className='btn btn-danger' id='dishes-order-button'>Place order</button>
           </div>
         </div>


         <div className='col-md-3'>
           <div id='pic-card'>
               <img src='https://media.istockphoto.com/id/1296798642/photo/roti-parata-or-roti-canai-with-lamb-curry-sauce-popular-malaysian-breakfast.jpg?s=612x612&w=0&k=20&c=fF4AYfw8w7fxZNDKW-xenP8O7KIs7xQTf0KuCuFGIj8='
              alt='pic' id='dishes-pic'/>
        
              <ul id='pic-headings'>
                 <li><h4 id='dishes-name'>Parrata</h4></li>
                <li id='dishes-rating'><FaRegStar id='star-icon'/><p>4.5Ratings</p></li>
             </ul>
                <h5 id='dishes-price'>70.00 Rs/-</h5>
        
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
                 <li><h4 id='dishes-name'>Veg Soup</h4></li>
                <li id='dishes-rating'><FaRegStar id='star-icon'/><p>4.0Ratings</p></li>
             </ul>
                <h5 id='dishes-price'>60.00 Rs/-</h5>
        
               <p id='dishes-description'><BsFillChatLeftTextFill/> Veg Soup is a delicious and healthy Continental soup ...</p>
               <button className='btn btn-danger' id='dishes-order-button'>Place order</button>
           </div>
         </div>

         <div className='col'>
           <div id='pic-card'>
               <img src='https://i0.wp.com/blendofspicesbysara.com/wp-content/uploads/2021/07/PXL_20210712_211207957.PORTRAIT-01.jpeg?fit=%2C&ssl=1'
              alt='pic' id='dishes-pic'/>
        
              <ul id='pic-headings'>
                 <li><h4 id='dishes-name'>Ven Pongal</h4></li>
                <li id='dishes-rating'><FaRegStar id='star-icon'/><p>4.0Ratings</p></li>
             </ul>
                <h5 id='dishes-price'>90.00 Rs/-</h5>
        
               <p id='dishes-description'><BsFillChatLeftTextFill/> Super satisfying and comforting ven pongal ...</p>
               <button className='btn btn-danger' id='dishes-order-button'>Place order</button>
           </div>
         </div>


         <div className='col-md-3'>
           <div id='pic-card'>
               <img src='https://www.yummyoyummy.com/wp-content/uploads/2020/11/IMG_9730-scaled.jpg'
              alt='pic' id='dishes-pic'/>
        
              <ul id='pic-headings'>
                 <li><h4 id='dishes-name'>Grilled Chiken</h4></li>
                <li id='dishes-rating'><FaRegStar id='star-icon'/><p>4.5Ratings</p></li>
             </ul>
                <h5 id='dishes-price'>320.00 Rs/-</h5>
        
               <p id='dishes-description'><BsFillChatLeftTextFill/> A full of chiken Grilled with a spicy masalas...</p>
               <button className='btn btn-danger' id='dishes-order-button'>Place order</button>
           </div>
         </div>
     
     
     </div>



    
    
    
    
    </div>
  )
}