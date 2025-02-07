import  React  from 'react'
import '../styles/Header.css'
import ButtonIcon from './ButtonIcon'
/* */
import { FaSearch } from "react-icons/fa"; 
import { IoInformationCircleOutline } from "react-icons/io5";


export default function Header(props) {
    /* Con esto le decimos que le ponga todo lo que le pongamos como hijo */
    return(
        <header className='header'>
            
            {props.children}
        </header> 
    )
 
}
