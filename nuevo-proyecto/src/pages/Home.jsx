import React from 'react';
import { pizzas } from '../components/pizzas'; // Ajusta la ruta según la estructura de tu proyecto
import CardPizza from '../components/CardPizza';

const Home = () => {
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Nuestras Pizzas</h1>
      <div className="row">
        {pizzas.map((pizza) => (
          <div className="col-md-4 mb-4" key={pizza.id}>
            <CardPizza pizza={pizza} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;