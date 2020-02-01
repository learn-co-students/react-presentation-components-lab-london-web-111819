import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

const changeColor = () => {
  this.style.background = "black"
}
ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={this.changeColor} />
  </div>,
  document.getElementById('root')
);