import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from './components/button'
import {Input} from './components/input'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button
          startIcon="Alarm"
          size="lg"
          variant="outline"
        >
          Learn React
        </Button>  
        <Input 
          label="Search"
          size="md"
          error
          multiline
          placeholder="shit"
          endIcon="Search"
        />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
