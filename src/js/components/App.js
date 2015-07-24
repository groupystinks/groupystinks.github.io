var {Component, PropTypes} = require('react');
var React = require('react/addons');
var Radium = require('radium');
var $ = require('jquery');

var Colors = require('./ColorMe');
var SpaceTravel = require('./SpaceTravel');
var PureRender = require('./PureRender');


@Radium
@PureRender
class Index extends Component {

  static willTransitionTo = (transition) => {

    $('canvas').parent().remove();
  }

  render(): any {
    return (
      <div>
        <span key='span' style={styles.name}>
          L
          {Radium.getState(this.state, 'span', ':hover') ? (
            <span style={styles.invisibleName}>
              <span>ai<br/></span>
              <span>Chia-Sheng</span>
            </span>
          ): null}
        </span>
        <SpaceTravel ref='space'/>
      </div>
    );
  }
}

var styles = {
  name: {
    position: 'absolute',
    zIndex: '100',
    color: Colors.whiteSmoke,
    top: '20%',
    left: '15%',
    fontSize: '28px',

    ':hover': {
      cursor: 'pointer',
    }
  },

  invisibleName: {
    position: 'relative',
    zIndex: '100',
    color: Colors.gray3,
    fontSize: '28px',
  }
}

module.exports = Index;
