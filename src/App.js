
import './App.css';

import { Body } from './components/screens/home/Body';
import { Foods } from './components/screens/Foods/Foods';
import { About } from './components/screens/About/About';
import { Contact } from './components/screens/contacts/Contact';

import {BrowserRouter as Router,Routes, Route,} from "react-router-dom";
import { Heading } from './components/headings/Heading';

import { Nonveg } from "./components/screens/Foods/dishes/Non-veg";
import { Vegfood } from "./components/screens/Foods/dishes/Vegfood";
import { Soups } from "./components/screens/Foods/dishes/Soups";
import { FastFoods } from "./components/screens/Foods/dishes/Fast_Foods";



function App() {

  
  
  return (
    <Router>
    <div className="container-fluid">
      
      <Heading></Heading>

      <Routes>
      
          <Route path='/' element={<Body/>}/>
          <Route path='/foods' element={<Foods/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contacts' element={<Contact/>}/>
          

          
          <Route path='/foods/Non_veg' element={<Nonveg/>}/>
          <Route path='/foods/Veg'  element={<Vegfood/>}/>
          <Route path='/foods/Soup'  element={<Soups/>}/>
          <Route path='/foods/fastfood'  element={<FastFoods/>}/>
        </Routes>

        
       
      
      
    </div>

    </Router>
  );
}

export default App;
