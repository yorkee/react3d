import React from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';

import {render} from 'react-dom';
import STLViewer from 'stl-viewer'



class FilleniumMalcon extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.cameraPosition = new THREE.Vector3(0, 0, 5);

    this.state = {
      cubeRotation: new THREE.Euler(),
    };

    this._onAnimate = () => {

      this.setState({
        cubeRotation: new THREE.Euler(
          this.state.cubeRotation.x + 0.1,
          this.state.cubeRotation.y + 0.1,
          0
        ),
      });  
    };  
  }

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
        <mesh
          rotation={this.state.cubeRotation}
        >
          <STLViewer
            url='public/models/Original-satellite-dish.stl'
            width={400}
            height={400}
            modelColor='#B92C2C'
            backgroundColor='#EAEAEA'
            rotate={true}
            orbitControls={true}
          />
        </mesh>
      </scene>
    </React3>);
  }
}

render(<FilleniumMalcon/>, document.getElementById('app'));