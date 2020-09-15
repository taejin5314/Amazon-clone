import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import './App.css';
import Checkout from './components/checkout/Checkout';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Login from './components/login/Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import Register from './components/register/Register';
import Payment from './components/payment/Payment';
import Orders from './components/orders/Orders';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51HPvZaCbdBPojIDJ9fsKRYJZvymZatoYz78QV95Ch2ewEpM2txDE9ZjO7SGMk9WdBI9DMW3WFfi341OMffJQXrjf00L0JY4Kbt');

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('The user is :', authUser);

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [user])

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders userId={user} />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/register">
            <Register />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>


          <Route exact path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
