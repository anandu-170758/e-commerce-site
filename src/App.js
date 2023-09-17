import React, { useState } from "react";
import "./App.css";
import Category from "./Components/Category";

function App() {
  const [categories, setCategories] = useState([]);
  const [products,setProducts] = useState([]);
  React.useEffect(() => {
    fetch("http://localhost:3001/categories")
      .then((response) => response.json())
      .then(data => {
        console.log(data);
        setCategories(data);
      });
  }, []);
const handlecategoryclick=id=>{
  fetch("http://localhost:3001/products?catId="+id)
  .then((response) => response.json())
  .then(data => {
    console.log(data);
    setProducts(data);
  });
}

  const renderCategories = () => {
    return categories.map(c=>
      <Category key={c.id} id={c.id} title={c.tittle} onhandlecategoryclick={()=>handlecategoryclick(c.id)}/>
      )
     
    }
    const renderProducts=()=>{
      return products.map(p=>
        <div>{p.tittle}</div>
        )
    }


  return (
    <>
      <header>My Store</header>
      <section>
        <nav>{categories && renderCategories()}</nav>
        <article>
          <h1>products</h1>
          { products && renderProducts()}
        </article>
      </section>
      <footer>footer</footer>
    </>
  );
}

export default App;
