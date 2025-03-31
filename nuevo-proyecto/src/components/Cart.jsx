import React, { useState } from 'react';
import { pizzaCart } from '../components/pizzas'; 

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  // Función para aumentar la cantidad de una pizza
  const increaseQuantity = (id) => {
    const updatedCart = cart.map(item => 
      item.id === id ? { ...item, count: item.count + 1 } : item
    );
    setCart(updatedCart);
  };

  // Función para disminuir la cantidad de una pizza
  const decreaseQuantity = (id) => {
    const updatedCart = cart.map(item => 
      item.id === id ? { ...item, count: item.count - 1 } : item
    ).filter(item => item.count > 0); // Eliminar items con count 0
    setCart(updatedCart);
  };

  // Calcular el total de la compra
  const total = cart.reduce((sum, item) => sum + (item.price * item.count), 0);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Detalles del pedido:</h2>
      
      {cart.length === 0 ? (
        <div className="text-center">
          <p>No hay pizzas en el carrito.</p>
        </div>
      ) : (
        <>
          {cart.map((item) => (
            <div className="row mb-3 align-items-center" key={item.id}>
              <div className="col-md-2">
                <img src={item.img} className="img-fluid rounded" alt={item.name} style={{ maxHeight: "80px" }} />
              </div>
              <div className="col-md-3">
                <h5 className="text-capitalize">{item.name}</h5>
              </div>
              <div className="col-md-3">
                <p>${item.price.toLocaleString()}</p>
              </div>
              <div className="col-md-4 d-flex align-items-center">
                <button 
                  className="btn btn-danger btn-sm" 
                  onClick={() => decreaseQuantity(item.id)}
                >
                  -
                </button>
                <span className="mx-2">{item.count}</span>
                <button 
                  className="btn btn-primary btn-sm" 
                  onClick={() => increaseQuantity(item.id)}
                >
                  +
                </button>
              </div>
            </div>
          ))}

          <div className="row mt-4">
            <div className="col-md-12">
              <h3 className="text-end">Total: ${total.toLocaleString()}</h3>
              <div className="d-flex justify-content-end mt-3">
                <button className="btn btn-success">Pagar</button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;