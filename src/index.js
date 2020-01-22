
// React CLI
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Route, HashRouter as Router } from 'react-router-dom';

// CSS
import './vendor/css/bootstrap.css';
import './vendor/css/clean-blog.css';
import './index.css';

// Custom Components
import Navbar from './general/Navbar';
import Header from './general/Header';
import Footer from './general/Footer';

import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';

//else if (this.state.route == 'error') route = (<div>{this.state.error.message}</div>)
  
if(!window.location.hash) window.location.hash = "#home";

const routing = (
    <div><Navbar /><Header />
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-lg-offset-0 col-md-12 col-md-offset-0">
            <Router>
                <Route path="/home" component={Home}></Route>
                <Route path="/projects" component={Projects}></Route>
                <Route path="/about" component={About}></Route>
            </Router>
          </div>
        </div>
      </div>
      <hr /><Footer /></div>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
