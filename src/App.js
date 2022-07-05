import React, { useState } from 'react';
import './App.css';
import {Image} from "./app/image"
import { Decreased, Increase } from './app/info';
import firstimage from "./images/1.jpg"
import secondimage from "./images/2.jpg"
import thirdimage from "./images/3.jpg"

function App() {
  var [value, setValue] = useState(0)
  
  return (
    <div className="App">
        <Image 
          images={[firstimage, secondimage, thirdimage]} 
          value={value}
          next={()=>{Increase(value, setValue)}}
          previous={()=>{Decreased(value, setValue)}}
          functionSet={setValue}
        />
    </div>
  );
}

export default App;

