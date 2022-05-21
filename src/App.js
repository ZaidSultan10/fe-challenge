import React from 'react'
import './App.css';
import Button from './components/Button';
import Display from './components/Display';
import buttonObject from './components/buttonObject';

function App() {
  return (
    <div className="App">
      <Display />
      <div style={{padding:'20px',display:'flex',border:'1px solid',flexWrap:'wrap',width:'300px',justifyContent:'space-between',alignItems:'center'}}>
        {
          buttonObject && buttonObject.map((item) => (
            <Button title={item.value} />
          ))
        }
      </div>
    </div>
  );
}

export default App;
