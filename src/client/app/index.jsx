import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return (
    	<div>
    		<p> Test</p>
    	</div>
    );
  }
}

render(<App/>, document.getElementById('app'));