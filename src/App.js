import React from 'react'
import './App.css';
import Button from './components/Button';
import Display from './components/Display';

function App() {
  return (
    <div className="App">
      <Display />
      <Button title={`1`} />
    </div>
  );
}

export default App;
