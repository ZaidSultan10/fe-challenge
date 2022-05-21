import React from 'react'
import './App.css';
import Button from './components/Button';
import Display from './components/Display';
import buttonObject from './components/buttonObject';

function App() {
  return (
    <div className="App">
      <Display />
      {
        buttonObject && buttonObject.map((item) => (
          <Button title={item.value} />
        ))
      }
    </div>
  );
}

export default App;
