import React from 'react';

const Cart = ({items}) => {
    const {title, price}= items;
    return (
        <div className='cart-info'>
            <h4>{title}</h4>
            <h4>{price}</h4>
        </div>
    );
};

export default Cart;