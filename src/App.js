//import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { home } from "./components/home";
import { shop } from "./components/shop";
import Product from "./components/product";
import { Login } from "./components/login";
import { Register } from "./components/register";
import  Buy  from "./components/buy";
import { About } from "./components/about";

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route component={home} path='/' exact />
        <Route component={shop} path='/shop' />
        <Route component={Product} path='/product' />
        <Route component={Login} path='/Login' />
        <Route component={Register} path='/register' />
        <Route component={Buy} path='/buy' />
        <Route component={About} path='/about' />
      </Switch>
    </Router>
  );
}

export default App;
