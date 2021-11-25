import React from 'react';
import './modal.scss'

import Modal from 'react-modal';

interface ModalProps {
    className?: string,
    modalIsOpen: boolean,
    closeModal: any,
  };

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    width: '100%',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const ModalComponent: React.FC<ModalProps> = ({
    modalIsOpen, 
    closeModal
}) => {
  let subtitle: any;

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#FF0000';
  }

  return (
    <div className="">
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          overlayClassName="Overlay"
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
          <button onClick={closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
    </div>
  );
}
