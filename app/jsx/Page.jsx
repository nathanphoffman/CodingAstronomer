var React = require('react');

// Main Body
var Navbar = require('./Components/Navbar.jsx');
var Header = require('./Components/Header.jsx');
var Footer = require('./Components/Footer.jsx');

// Pages
var Projects = require('./Pages/Projects.jsx');
var Home = require('./Pages/Home.jsx');
var About = require('./Pages/About.jsx');

module.exports = class extends React.Component {
  render() {

    // setup our page component routes here:
    let route;
    if (this.state && this.state.route) {
      if (this.state.route == 'home') route = (<Home/>);
      else if(this.state.route == 'projects') route = (<Projects/>);
      else if(this.state.route == 'about') route = (<About/>);
      else if (this.state.route == 'error') route = (<div>{this.state.error.message}</div>)
    }
    else route = null; // we do nothing if the route is still rendering

    return (<div><Navbar/><Header/>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-lg-offset-0 col-md-12 col-md-offset-0">
            {route}
          </div>
        </div>
      </div>
      <hr/><Footer/></div>);
  }
}
