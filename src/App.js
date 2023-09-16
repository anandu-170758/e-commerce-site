import React, { useState } from 'react';
import './App.css';

function App() {
  const [results,SetResults]=useState([]);
  React.useEffect(()=>{
    fetch("http://localhost:3001/categories")
    .then(response=>response.json())
    .then(data=>{
      console.log(data);
      SetResults(data);
    })
  },[])
  return (
    <div className="App">
     HI
    </div>
  );
}

export default App;
