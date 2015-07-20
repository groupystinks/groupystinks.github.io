var App = require('./App');
var ThreadView = require('./components/ThreadView');
var ProcessView = require('./components/ProcessView');
var React = require('react');
var Router = require('react-router');

var Route = Router.Route;

var routes = (
  <Route handler={App} name="app" path="/">
  </Route>
);

module.exports = routes;
