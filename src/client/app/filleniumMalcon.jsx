import React from 'react';
import * as THREE from 'three';
import {render} from 'react-dom';
import STLViewer from 'stl-viewer'



class FilleniumMalcon extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {


    return (
        <mesh
          rotation={this.props.state.cubeRotation}
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
    );
  }
}

export default FilleniumMalcon