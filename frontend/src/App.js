import React from 'react';
import data from './data';

function App() {
  return (
    <div className="grid-container">
    <header className="row">
        <div className="">
            <a className="brand" href="/">amazona</a>
        </div>
<div className="">
    <a href="/cart">Cart</a>
    <a href="/signin">Sign In</a>
</div>
</header>
<main>
    <div className="row center">
      {
        data.products.map(product =>(
          <div className="card">
          <a href={`/products/${product._id}`}>
              <img className="medium" src={product.image} alt={product.name}/>
          </a>
          <div className="card-body">
          <a href={`/products/${product._id}`}>
                  <h2>{product.name}</h2>
              </a>
              <div className="rating">
                  <span>
                      <i className="fa fa-star"></i>
                  </span>
                  <span>
                      <i className="fa fa-star"></i>
                  </span>
                  <span>
                      <i className="fa fa-star"></i>
                  </span>
                  <span>
                      <i className="fa fa-star"></i>
                  </span>
                  <span>
                      <i className="fa fa-star"></i>
                  </span>
              </div>
              <div className="price">
                  ${product.price}
              </div>
          </div>
          
      </div>

        ))
      }
  
        
    </div>
</main>
<footer className="row center">
    All rights reserved
</footer>
</div>
  );
}

export default App;
