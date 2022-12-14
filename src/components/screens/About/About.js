import React from 'react'
import "./about.css"

export const About = () => {
  return (
    <div className='container'>

     <div className='row'>
        <div className='col-2'></div>
          <div className='col'>
          <img   src="https://static.vecteezy.com/system/resources/previews/002/450/691/non_2x/food-delivery-service-fast-food-delivery-scooter-delivery-service-illustration-vector.jpg"
     alt='pic' id='order-pic'/>
            </div>       
      </div>


        <h2 id='header'>FREQUENTLY ASKED QUESTIONS</h2>
        <div className='row'>
          <div className='col' id='colm'>
            <h4> How to Register restaurant in FoodCorner?</h4>
            <p>Anyone can start their restaurant business online
               within few minutes.Click on Add Your Restaurant 
               from foodcorner welcome page. Enter your mail id 
               and receive mail to add your restaurant details.
                Add whole details and restaurant will be online.</p>
          </div>

          <div className='col' id='colm'>
            <h4>  How to login to Admin Panel?</h4>
            <p>On FoodCorner every restaurant owner has their own admin panel
               from where owner can manage their restaurant details. 
              Login to https://www.foodcorner.com/RestaurantLogin or
               download the free app from Google PlayStore or Apple App Store.</p>
          </div>
        </div>



        <div className='row'>
          <div className='col' id='colm'>
            <h4> Who will receive payment of orders? </h4>
            <p>Restaurant owner will get whole payment of 
              orders placed through FoodCorner’s Payment Gateway.
               User can setup their Stripe, Razorpay or 
               UPI accounts in Admin Panel.</p>
          </div>

          <div className='col' id='colm'>
            <h4>   How can to view history of orders received?</h4>
            <p>You just have to login to your FoodCorner
               Restaurant Management System App or 
               https://www.foodcorner.com/RestaurantLogin and 
               click on Order Management to view full order
                details and history.</p>
          </div>
        </div>

    </div>
  )
}
