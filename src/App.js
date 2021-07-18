import './App.css';
import React, {Fragment, useState} from 'react';
import {Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import Base from "./components/Base";
import Toppings from "./components/Toppings";
import Order from "./components/Order";
import Header from "./components/Header";

function App() {

    const [pizza, setPizza] = useState({base:"", toppings:[]});

    const addBase= (base) => {
        setPizza({...pizza, base})
    };

    const addTopping = (topping)=> {
        let newToppings;
        if (!pizza.toppings.includes(topping)){
            newToppings = [...pizza.toppings, topping];
        }
        else {
            newToppings = pizza.toppings.filter(item => item !== topping);
        }
        setPizza({...pizza, toppings: newToppings});
    };
    return (
      <Fragment>
          <Header/>
          <Switch>
              <Route exact path="/">
                  <Home/>
              </Route>
              <Route path="/base">
                  <Base addBase={addBase} pizza={pizza}/>
              </Route>
              <Route path="/toppings">
                  <Toppings addTopping={addTopping} pizza={pizza}/>
              </Route>
              <Route path="/order">
                  <Order pizza={pizza} />
              </Route>


          </Switch>
      </Fragment>
  );
}

export default App;
