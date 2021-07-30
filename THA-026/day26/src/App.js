import logo from './logo.svg';

import { useSelector } from 'react-redux';

import './App.css';
import Body from './body.jsx';
import Body1 from './body1.jsx';

function App() {
  return (
    
    <div className="center1">
      <div className="App">
        <h1>Started with Redux 🎇</h1>
      </div>
      <div className="center">
        <Body />
        <Body1 />
    </div>
    </div>
  );
}

export default App;
