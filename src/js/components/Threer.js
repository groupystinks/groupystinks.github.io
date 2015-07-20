var THREE = require('three');

function _initiator(component) {
  var newThreers = component.initThree();
  Object.keys(newThreers).forEach(key => {
    window.spaceTravel[key] = newThreers[key];
  });

  // add it to the scene
  window.spaceTravel.scene.add(window.spaceTravel.particleSystem);
}


function render() {
  window.spaceTravel.particleSystem.rotation.y += 0.01;

  window.spaceTravel.renderer.render(window.spaceTravel.scene, window.spaceTravel.camera);
}


var animate = () => {
	requestAnimationFrame(animate);

  render();
};


module.exports = function decorateWithThreeInit(ComposedComponent) {
  class Threer extends ComposedComponent {
    constructor() {
      super();

      if (this.initThree) {
        window.spaceTravel = {};
        window.spaceTravel.scene = new THREE.Scene();
        window.spaceTravel.camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

        window.spaceTravel.renderer = new THREE.WebGLRenderer();
        window.spaceTravel.renderer.setSize(window.innerWidth, window.innerHeight);

        _initiator(this);
      }
    }

    componentDidMount() {
      if (super.componentDidMount) {
        super.componentDidMount();
      }

      animate();
    }
  }

  Threer.defaultProps = ComposedComponent.defaultProps;
  Threer.propTypes = ComposedComponent.propTypes;
  Threer.contextTypes = ComposedComponent.contextTypes;

  return Threer;
};
