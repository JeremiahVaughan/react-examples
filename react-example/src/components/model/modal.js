import './modal.scss'
import ReactDOM from "react-dom";
import {useEffect} from "react";

function Modal({ onClose, children, actionBar }) {
  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [])
  return ReactDOM.createPortal(
    <div>
      <div onClick={onClose} className='background'></div>
      <div className='foreground'>
        <div className='content'>
          {children}
          <div className='action-bar'>
            {actionBar}
          </div>
        </div>
      </div>
    </div>,
    document.querySelector('.modal-container')
  );
}

export default Modal;


