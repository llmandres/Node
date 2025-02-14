import  React  from 'react'
import '../styles/Modal.css'
import { FaInfoCircle } from "react-icons/fa";



function Modal(props) {

    /* En este ejemplo abajo, buttonText es un objeto, que tendra bTextRed como atributo */
    return(
        <div className='modal'> 
            <FaInfoCircle className='modal__icon'/>
            <p className='modal__text'>{props.text}</p>
            <div className='modal__buttonWrapper'>
                <button className='modal__button modal__button--danger'>{props.buttonText.bTextRed}</button>
                <button className='modal__button modal__button--success'>{props.buttonText.bTextGreen}</button>
            </div>
        </div>

    )
}

export default Modal
