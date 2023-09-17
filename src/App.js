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
    <>
    <header>My Store</header>
    <section>
<nav>
    {
    results.map(d=>(
      <div key={d.id}>{d.tittle}</div>
    ))}
    </nav>
    <article>
      main area
    </article>
    </section>
    <footer>
      footer
    </footer>
   
    </>
  );
}

export default App;
