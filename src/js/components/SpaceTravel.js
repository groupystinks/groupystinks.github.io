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
    this._events = {};
    this._events = AttractorsTrip();
  }

  componentWillUnmount() {
    // remove
    document.removeEventListener( 'mousemove', this._events.onDocumentMouseMove, false );
    document.removeEventListener( 'touchstart', this._events.onDocumentTouchStart, false );
    document.removeEventListener( 'touchmove', this._events.onDocumentTouchMove, false );
    // window.removeEventListener( 'resize', this._events.onWindowResize, false );
  }

  render(): any {
    return null;
  }
}

module.exports = SpaceTravel;
