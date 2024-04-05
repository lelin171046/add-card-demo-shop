
import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'
import SingleProduct from './Component/SingleProduct';
import Cart from './Component/Cart/Cart';

function App() {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([])
  useEffect(()=>{
    fetch('./Data.json')
    .then(res => res.json())
    .then(data => setProduct(data))
  },[])

  
  const handleCard = (p)=>{
    const isExist = cart.find((pd) => pd.id == p.id);
    if(!isExist){
      setCart([...cart, p])
    }
    else{
      alert('Already added')
    }

  }

  return (
    <>
    <div className="main-container">
      <div className="cards-cointainer">
      {
          product.map((pd, id)=>(<SingleProduct
             key={id}
             product={pd}
             handleCard={handleCard}
             ></SingleProduct>))
        }
      </div>
      <div className="Cart-container">
      <h1>This is cart</h1>
      <div className="cart-title">
        <h3>name</h3>
        <h3>Price</h3>
        
      </div>
      <div className="">
        {cart.map((iteam, id)=>
      <Cart key={id} items={iteam}></Cart>  
      )
        }
      </div>
      </div>
    </div>
    
    </>
  )
}

export default App
