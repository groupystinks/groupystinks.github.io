var _ = require('lodash');
var asap = require('asap');
var {Component, PropTypes} = require('react');
var React = require('react/addons');
var THREE = require('three');

var Threer = require('./Threer');
var PureRender = require('./PureRender');
var particleImage = require("../../images/particle.png");


@Threer
@PureRender
class SpaceTravel extends Component {

  initThree(): Object {
    /* from tutorials:
     *  https://aerotwist.com/tutorials/creating-particles-with-three-js/
    */
    var particleCount = 1800;
    var particles = new THREE.Geometry();
    var pMaterial = new THREE.ParticleBasicMaterial({
      color: 0xFFFFFF,
      size: 20,
      map: THREE.ImageUtils.loadTexture(
        particleImage
      ),
      blending: THREE.AdditiveBlending,
      transparent: true,
    });

    // now create the individual particles
    for (var p = 0; p < particleCount; p++) {

      // create a particle with random
      // position values, -250 -> 250
      var pX = Math.random() * 500 - 250,
          pY = Math.random() * 500 - 250,
          pZ = Math.random() * 500 - 250,
          particle = new THREE.Vector3(pX, pY, pZ);

      // add it to the geometry
      particles.vertices.push(particle);
    }

    // create the particle system
    var particleSystem = new THREE.ParticleSystem(particles, pMaterial);

    // also update the particle system to
    // sort the particles which enables
    // the behaviour we want
    particleSystem.sortParticles = true;

    return {
      particleSystem: particleSystem,
    };
  }


  componentDidMount() {
    /*
     * mount Space Travel by ThreeJS.
    */
    document.body.appendChild(window.spaceTravel.renderer.domElement);
  }


  render(): any {
    return null;
  }
}

module.exports = SpaceTravel;
