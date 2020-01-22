
var React = require('react');
var ReactDOM = require('react-dom');
var Page = require('./Page.jsx');
var state = require('./../js/state.js');

module.exports = function(){

  state.setRootComponent(ReactDOM.render(
    <Page></Page>,
    document.getElementById('reactJS')
  ));

  routie({
    // preview blog posts is the default state
    '': function() {
      state.setState({ route: 'home', page: 1, tag: null })},

    'projects': function() {
      state.setState({ route: 'projects' })},

    'about': function() {
      state.setState({ route: 'about' })},

    // this must be at the end to catch any non matching routes
    '*': function(){
      state.setState({ route: 'error', message: "Route not found" });
    }

  });



};

