
import React from 'react';

const SingleProduct = ({product, handleCard}) => {
    const {image, description, price, title} = product;
    console.log(product);
    return (
        <div>
            <div className="card">
          <img className='card-img' src={image} alt="" />
          <h3>{title}</h3>
          <p>description:{description}</p>
          <div className="card-footer">
            <h3>Price:{price}$</h3>
            <button onClick={()=>handleCard(product)}>Add to cart</button>
          </div>
        </div>
        </div>
    );
};

export default SingleProduct;