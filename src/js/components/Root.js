var {Component, PropTypes} = require('react');
var React = require('react/addons');
var Radium = require('radium');
var PureRender = require('./PureRender');
var Router = require('react-router');
var Header = require('./Header');

var RouteHandler = Router.RouteHandler
var Link = Router.Link;


@PureRender
class Root extends Component {
  render(): any {

    return (
      <div>
        <Header
          path={this.props.path}
        />
        <RouteHandler {...this.props} />
      </div>
    );
  }
}

module.exports = Root;
