import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ThriftLife from './components/ThriftLife';

class App extends Component {
  render() {
    return (
      <div className="big-container">
        <div className="video-container">  
              <video preload='auto' loop='loop' muted='muted' autoPlay='true' className='video'>
                  <source src="https://www.dl.dropboxusercontent.com/s/wvkjh6acwcyucay/563400165.mp4?dl=0" type="video/mp4" />
                  Video Not Supported
              </video>
        </div>
        <ThriftLife />
      </div>
    );
  }
}

export default App;
