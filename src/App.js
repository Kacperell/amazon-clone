import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header.js'
import Home from './components/Home';
import Login from "./components/Login";
import Payment from "./components/Payment";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './components/Checkout';
import Orders from './components/Orders';
import { auth } from './firebase';
import { loadStripe } from "@stripe/stripe-js";
import { useStateValue } from "./StateProvider";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_v7A691DkziNSPRjmXUqCZTcR00RTiZRiiw"
);

function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        //the user is lled in 
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })

  }, []);

  return (
    <Router>
      <div className="app">
        <Switch >
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
