import React from 'react';
import './App.css';
import {Button} from './components/button'
import {Input} from './components/input'
import {ModalComponent} from './components/modal'

function App() {
  let subtitle: any;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#FF0000';
  }

  const closeModal = ():void => {
    setIsOpen(false);
  }

  return (
    <div className="App">
      <header className="App-header">

        <Button
          endIcon="Search"
          onClick={openModal}
        >
          Open Modal
        </Button>

        <Input 
          label="Search"
          size="md"
          error
          multiline
          placeholder="shit"
          endIcon="Search"
        />

        <ModalComponent 
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
        />

      </header>
    </div>
  );
}

export default App;
