import React, { useState } from "react";
import "./App.css";
import Category from "./Components/Category";

function App() {
  const [results, SetResults] = useState([]);
  React.useEffect(() => {
    fetch("http://localhost:3001/categories")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        SetResults(data);
      });
  }, []);
  const renderCategories = () => {
    const categories=[];
    for(let i=0;i<results.length;i++){
      categories.push(<Category key={results[i].id} id={results[i].id} title={results[i].tittle}/>
      )
     
    }
    return categories ;
    
    
  };

  return (
    <>
      <header>My Store</header>
      <section>
        <nav>{results && renderCategories()}</nav>
        <article>main area</article>
      </section>
      <footer>footer</footer>
    </>
  );
}

export default App;
