import React from 'react'
import {BsFillChatLeftTextFill} from "react-icons/bs";
import {FaRegStar}from "react-icons/fa";
import { Navbar } from '../Navbar';
import "./complete.css";

export const Soups = () => {
  return (
    <div>

    <Navbar/>

<div className='row' id='dishes-row'>
         <div className='col'>
           <div id='pic-card'>
               <img src='https://storage.googleapis.com/gen-atmedia/3/2011/10/fa778f403dc37d943dafe517433a272a3cca0d26.jpeg'
              alt='pic' id='dishes-pic'/>
        
              <ul id='pic-headings'>
                 <li><h4 id='dishes-name'>Egg Soup</h4></li>
                <li id='dishes-rating'><FaRegStar id='star-icon'/><p>4.1Ratings</p></li>
             </ul>
                <h5 id='dishes-price'>70.00 Rs/-</h5>
        
               <p id='dishes-description'><BsFillChatLeftTextFill/>It is a very popular Indian soup....</p>
               <button className='btn btn-danger' id='dishes-order-button'>Place order</button>
           </div>
         </div>

         <div className='col'>
           <div id='pic-card'>
               <img src='https://photos.bigoven.com/recipe/hero/japanese-miso-soup-8f45df.jpg'
              alt='pic' id='dishes-pic'/>
        
              <ul id='pic-headings'>
                 <li><h4 id='dishes-name'>Miso soup</h4></li>
                <li id='dishes-rating'><FaRegStar id='star-icon'/><p>4.3Ratings</p></li>
             </ul>
                <h5 id='dishes-price'>70.00 Rs/-</h5>
        
               <p id='dishes-description'><BsFillChatLeftTextFill/>Tomato and Mint Soup is a delicious ..</p>
               <button className='btn btn-danger' id='dishes-order-button'>Place order</button>
           </div>
         </div>


         <div className='col-md-3'>
           <div id='pic-card'>
               <img src='https://media.30seconds.com/tip/lg/Fresh-Tomato-Fennel-Soup-Recipe-An-Elevated-Take-on-a-Fami-17191-c46ea32652-1628173316.jpg'
              alt='pic' id='dishes-pic'/>
        
              <ul id='pic-headings'>
                 <li><h4 id='dishes-name'>Tomato</h4></li>
                <li id='dishes-rating'><FaRegStar id='star-icon'/><p>4.7Ratings</p></li>
             </ul>
                <h5 id='dishes-price'>70.00 Rs/-</h5>
        
               <p id='dishes-description'><BsFillChatLeftTextFill/>Madeup with lot of vegtables...</p>
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
                <li id='dishes-rating'><FaRegStar id='star-icon'/><p>4.2Ratings</p></li>
             </ul>
                <h5 id='dishes-price'>80.00 Rs/-</h5>
        
               <p id='dishes-description'><BsFillChatLeftTextFill/>"Easy and Instant Pot...</p>
               <button className='btn btn-danger' id='dishes-order-button'>Place order</button>
           </div>
         </div>

         <div className='col'>
           <div id='pic-card'>
               <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_n39l9XdhCBseo0juCex72eA0TllgXd2Qj8dBURRJT3Y97eq-UAAekRKBwQ35ENqN7tA&usqp=CAU'
              alt='pic' id='dishes-pic'/>
        
              <ul id='pic-headings'>
                 <li><h4 id='dishes-name'>Mutton soup</h4></li>
                <li id='dishes-rating'><FaRegStar id='star-icon'/><p>4.8Ratings</p></li>
             </ul>
                <h5 id='dishes-price'>90.00 Rs/-</h5>
        
               <p id='dishes-description'><BsFillChatLeftTextFill/> Super satisfying and comforting  ...</p>
               <button className='btn btn-danger' id='dishes-order-button'>Place order</button>
           </div>
         </div>


         <div className='col-md-3'>
           <div id='pic-card'>
               <img src='https://hips.hearstapps.com/del.h-cdn.co/assets/17/39/1506455983-delish-cream-mushroom-soup.jpg'
              alt='pic' id='dishes-pic'/>
        
              <ul id='pic-headings'>
                 <li><h4 id='dishes-name'>Mushroom Soup</h4></li>
                <li id='dishes-rating'><FaRegStar id='star-icon'/><p>4.3Ratings</p></li>
             </ul>
                <h5 id='dishes-price'>70.00 Rs/-</h5>
        
               <p id='dishes-description'><BsFillChatLeftTextFill/>There is no need for the can with this easy Cream of Mushroom Soup .</p>
               <button className='btn btn-danger' id='dishes-order-button'>Place order</button>
           </div>
         </div>
     
     
     </div>
    </div>
  )
}
