import  React  from 'react'
import '../styles/Modal.css'
import { FaInfoCircle } from "react-icons/fa";



function Modal(props) {

    return(
        <div className='modal'> 
            <FaInfoCircle className='modal__icon'/>
            <p className='modal__text'>Save changes?</p>
            <div className='modal__buttonWrapper'>
                <button className='modal__button modal__button--danger'>Discard</button>
                <button className='modal__button modal__button--success'>Save</button>
            </div>
        </div>

    )
}

export default Modal
