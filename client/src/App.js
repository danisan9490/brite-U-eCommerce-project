import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from './components/HomeScreen/HomeScreen';
import ProductScreen from './components/ProductsScreen/ProductScreen';
import CartScreen from './components/BasketScreen/CartScreen';



function App() {

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>
              &#9776;
      </button>
            <Link to="/">Brite-U</Link>
          </div>
          <div className="header-links">
            <a href="cart.html">Basket</a>
            <a href="signin.html">Sign In</a>
          </div>
        </header>
        <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>x</button>
          <ul>
            <li>
              <a href="index.html">Scooters</a>
            </li>
            <li>
              <a href="index.html">Cycles</a>
            </li>
          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
          </div>

        </main>

        <footer className="footer">
          All right reserved.
      </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
