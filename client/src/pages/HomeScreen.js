import React, { useState } from 'react'
import ProductScreen from './ProductScreen';
// Need to look at /client/pages/books.js to match functionality
function HomeScreen(props) {

  const [barterItemId, setBarterItemId] = useState(-1);

  function setId(e) {
    //console.log(e);
    setBarterItemId(e.target.name);
  }

  return (
    <div className="container">
      <div className="row center products-container">
      {
        data.products.map(product =>
          <div className="card" key={product._id}>
          <div className="card-body">
            <div className="product">
              <img className="product-image" src={product.image} alt={product.name} onClick={SVGPathSegCurvetoQuadraticSmoothRel} name={product._id} />
              <div className="product-name">
                <button onClick={setId} name={product._id}>{product.name}</button>
              </div>
              <div className="product-brand">{product.brand}</div>
              <div className="product-price">${product.price}</div>
              <div className="product-rating">{product.rating} Stars ({product.numReviews} Reviews)</div>
            </div>
          </div>
          </div>
          )
      }
    </div>
    <div className="row center enlarged-container">
      <ProductScreen barterItemId={barterItemId} />
    </div>
   </div>
      );
}
export default HomeScreen; 