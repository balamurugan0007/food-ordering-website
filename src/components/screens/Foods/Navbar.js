import React from 'react';





export const Navbar = () => {
  return (
    <div className='nav'>
          <ul id='list'>
        <li>  <a href='/foods'>Foryou</a>
        </li>
        <li ><a href='/foods/Non_veg'>Nonveg</a></li>
        <li> <a href='/foods/veg'>Veg</a></li>
        <li  ><a href='/foods/soup'>Soups</a></li>
        <li ><a href='/foods/fastfood'>Fast Food</a></li>
        

      </ul>
      
    </div>
    
  )
}
