
import { addDoc } from 'firebase/firestore';
import React, { useState } from 'react'
import { db } from '../../firbase/Firebase'
import { collection } from 'firebase/firestore';
import "./Body.css"

export const Feedback = () => {


    const [name,Setname]=useState("");
    const [ratings,SetRatings]=useState("0");
    const [feedback,Setfeedback]=useState("");

    const handlechange=(e)=>{
        console.log(e.target.get);
        if(e.target.get==='info'){
            Setname(e.target.value);
            console.log(Setname)
        }
        else if(e.target.value==="ratings"){
            SetRatings(Number(e.target.value));

        }
        else{
            Setfeedback(e.target.value);
        }


    };
    const userCollectionRef=collection(db,"user")
    const  handlesubmit=async()=>{
        const data=await addDoc( userCollectionRef,{name,ratings,feedback});
        console.log(data)
        
    }


  return (


    <div>
       <div className='sample'>
        
        <form id='form'>
  <div class="form-group row" id='comment'>
    <label for="staticEmail" class="col-sm-2 col-form-label">Name</label>
    <div class="col-sm-10">
    <input name='info' type="text" class="form-control" id="inputPassword" placeholder="UserName" onChange={handlechange}/>
    </div>
  </div>
  <div class="form-group row" id='comment'>
    <label for="inputPassword" class="col-sm-2 col-form-label">Ratings</label>
    <div class="col-sm-10">
      <input  name="ratings" type="number" class="form-control" id="inputPassword" placeholder="Rate the Foodcorner " onChange={handlechange}/>
    </div>
  </div>

  <div class="form-group row" id='comment'>
    <label for="inputPassword" class="col-sm-2 col-form-label">Feedback</label>
    <div class="col-sm-10">
      <input name='feedback' type="text" class="form-control" id="inputPassword" placeholder="Feedback for Foodcorner " onChange={handlechange}/>
    </div>
  </div>
</form>

        </div>

        <div class="col-md-12 text-center">
            <button type="button" class="btn btn-primary" id='feed-submit' onClick={handlesubmit}>Submit</button>
            
        </div>
    </div>
  )
}
