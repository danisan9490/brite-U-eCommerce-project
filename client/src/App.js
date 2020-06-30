import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from './components/HomeScreen/HomeScreen';
import ProductScreen from './components/ProductsScreen/ProductScreen';
import CartScreen from './components/BasketScreen/CartScreen';
import SignInScreen from './components/SignInScreen/SignInScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './components/RegisterScreen/RegisterScreen';
import ProductsScreen from './components/AdminProductsScreen/AdminProductsScreen';
import ShippingScreen from './components/CheckOutScreen/ShippingScreen/ShippingScreen';
import PaymentScreen from './components/CheckOutScreen/PaymentScreen/PaymentScreen';
import PlaceOrderScreen from './components/CheckOutScreen/PlaceOrderScreen/PlaceOrderScreen';
import OrderScreen from './components/CheckOutScreen/OrderScreen/OrderScreen';



function App() {

  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;

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
            <Link to="/cart">Basket</Link>
            {
              userInfo ? <Link to="/profile">{userInfo.name}</Link> :
                <Link to="/signin">Sign In</Link>
            }
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
            <Route path="/order/:id" component={OrderScreen} />
            <Route path="/products" component={ProductsScreen} />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/signin" component={SignInScreen} />
            <Route path="/register" component={RegisterScreen} />
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
