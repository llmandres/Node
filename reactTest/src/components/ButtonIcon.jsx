import  React  from 'react'
import { FaSearch } from "react-icons/fa"; /* Import del icon*/
import '../styles/ButtonIcon.css'


export default function ButtonIcon(props) {
    /* REACT ICONS WEB*/
    /*Al componente ButtonIcon le pasamos una propiedas, haciendo que llame a su hijo , puesto en el App.jsx*/
    return(
        <button className='buttonIcon'>
            {props.icon}
        </button>   
    )
 
}

