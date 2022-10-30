import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useLockBodyScroll } from 'react-use';
import s from './Modal.module.css'

const modalRootRef = document.querySelector('#modal-root');

const Modal = ({closeForm, description}) => {
    useLockBodyScroll(true);

    useEffect(() => {

        const onEscPress=e=>{
            if(e.code === "Escape") {
                closeForm();
            }
        }

        window.addEventListener('keydown', onEscPress)
        return () => {
           window.removeEventListener('keydown', onEscPress);
        };
    }, [closeForm])

    const handleBackdropClick=(e)=>{
        if ( e.target === e.currentTarget) return closeForm()
    }

    return createPortal(
        <div className={s.backdrop} onClick={handleBackdropClick}>
          <div className={s.modal}>
            <header className={s.header}>
              <button
                className={s.closeBtn}
                onClick={closeForm}
                aria-label="Close"
              >
                &times;
              </button>
            </header>
            <div className={s.content}>
              <div className={s.lead}></div>
    
              {description}
            </div>
          </div>
        </div>,
        modalRootRef,
      );
}

export default Modal