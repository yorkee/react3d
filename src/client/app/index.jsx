import React from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';
import {render} from 'react-dom';
import FilleniumMalcon from './filleniumMalcon.jsx';

class Simple extends React.Component {
  
  constructor(props, context) {
    super(props, context);

    // construct the position vector here, because if we use 'new' within render,
    // React will think that things have changed when they have not.
    this.cameraPosition = new THREE.Vector3(0, 0, 5);

  };

  render() {
    const width = window.innerWidth; // canvas width
    const height = window.innerHeight; // canvas height

    return (<React3
      mainCamera="camera" // this points to the perspectiveCamera which has the name set to "camera" below
      width={width}
      height={height}

      onAnimate={this._onAnimate}
    >
      <scene>
        <perspectiveCamera
          name="camera"
          fov={75}
          aspect={width / height}
          near={0.1}
          far={1000}

          position={this.cameraPosition}
        />

        <FilleniumMalcon/>
      </scene>
    </React3>);
  };
}
render(<Simple/>, document.getElementById('app'));






