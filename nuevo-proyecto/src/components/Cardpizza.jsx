import React from 'react';

const CardPizza = ({ pizza }) => {
  return (
    <div className="card h-100">
      <img src={pizza.img} className="card-img-top" alt={pizza.name} />
      <div className="card-body">
        <h5 className="card-title text-capitalize">{pizza.name}</h5>
        <hr />
        <h6>Ingredientes:</h6>
        <ul className="list-unstyled">
          {pizza.ingredients.map((ingredient, index) => (
            <li key={index}>
              <span className="text-warning">➤</span> {ingredient}
            </li>
          ))}
        </ul>
      </div>
      <div className="card-footer text-center">
        <h5>Precio: ${pizza.price.toLocaleString()}</h5>
        <div className="d-flex justify-content-between mt-2">
          <button className="btn btn-info">Ver Más</button>
          <button className="btn btn-danger">Añadir</button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;