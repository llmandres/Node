import  React  from 'react'
import '../styles/FilterInput.css'
import ButtonIcon from './ButtonIcon'
/* */
import { FaSearch } from "react-icons/fa"; 
import { IoInformationCircleOutline } from "react-icons/io5";
import { IoMdClose } from 'react-icons/io';


export default function FilterInput(props) {

    return(
        <div className='filterInput'>
        <input onChange={(e) => props.onChange(e)} className='filterInput_input' type="text" placeholder='Search by keyword' />
        <button onClick={props.onClick} className='filterInput_button'><IoMdClose></IoMdClose></button>
        </div>
    )
 
}
