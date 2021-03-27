import React from 'react';
import data from './data';

function ProductScreen(props) {

    console.log("[DEBUG] props.productId:", props.productId);
    const product = data.products.find(item => { return item._id === props.productId })
    
    if (product) {
        return (
            <div>
    <div className="details">
      <div className="details-image">
        <img src={product.image} alt={product.name}></img>
      </div>
      <div className="details-info">
        <ul>
          <li>
            <h4>{product.name}</h4>
          </li>
          <li>
            {product.rating} Stars ({product.numReviews} Reviews)
          </li>
          <li>
            Price: <b>${product.price}</b>
          </li>
          <li>
            Description:
            <div>
              {product.description}
            </div>
          </li>
        </ul>
      </div>
      <div className="details-action">
        <ul>
          <li>
            Price: {product.price}
          </li>
          <li>
            Status: {product.status}
          </li>
          
          <li>
          <button>Chat with Seller</button>
            <button>Barter Up</button>
          </li>
        </ul>
      </div>

    </div>

  </div>
        );
    }
    else {
        return (
            <div>
                Please select a Product to get started :-)
            </div>
        );
    }
}
export default ProductScreen;