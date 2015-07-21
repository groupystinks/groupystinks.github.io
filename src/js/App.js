var _ = require('lodash');
var asap = require('asap');
var {Component, PropTypes} = require('react');
var React = require('react/addons');
var Radium = require('radium');

var SpaceTravel = require('./components/SpaceTravel');
var PureRender = require('./components/PureRender');


@Radium
@PureRender
class App extends Component {

  render(): any {
    return (
      <SpaceTravel/>
    );
  }
}

var styles = {
  root: {
    backgroundColor: 'black',
  },

  white: {
    color: 'white',
    backgroundColor: 'black',
  },
};

module.exports = App;
