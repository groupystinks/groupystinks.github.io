var _ = require('lodash');
var asap = require('asap');
var {Component, PropTypes} = require('react');
var React = require('react/addons');
var THREE = require('three');

var PureRender = require('./PureRender');
var AttractorsTrip = require('./AttractorsTrip');
var galaxyImg = require("../../images/galaxy.png");


@PureRender
class SpaceTravel extends Component {
  componentDidMount() {
    AttractorsTrip()
  }


  render(): any {
    return null;
  }
}

module.exports = SpaceTravel;
