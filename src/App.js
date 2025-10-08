import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import Login from './components/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Card from './components/Card'

function App() {

  const products = [
    { id: 1, name: "Product 1", price: 19.99, image: "./images/milk.jpeg" },
    { id: 2, name: "Product 2", price: 29.99, image: "/product2.png" },
    { id: 3, name: "Product 3", price: 39.99, image: "/product3.png" },
    { id: 4, name: "Product 4", price: 49.99, image: "/product4.png" },
  ];

function addToCart(){}

  return (
    <div class="container">
      <h2>Shopping Cart</h2>

      <div class="row">
        {products.map((product) => (
          <div key={product.id} class="col-lg-3 col-md-4 col-sm-6 mb-4">
            <Card 
              id={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              onAddToCart={() => addToCart(product)}
            />
          </div>
        ))}
      </div>

    </div>
  );
}

export default App;