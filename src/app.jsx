import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import logo from '../public/logo.png'; 

class App extends React.Component {	
  render() {
    return (
      <div className="App">
         <div className = "Header">
          Atmosphere
          </div> 
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
