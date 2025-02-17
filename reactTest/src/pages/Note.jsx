import  React  from 'react'
import  ButtonIcon  from '../components/ButtonIcon.jsx'
import  Header  from '../components/Header.jsx'
import NoteItem from '../components/NoteItem.jsx';
import { Link } from 'react-router-dom';

import ImagePlaceHolder from '../components/ImagenPlaceHolder.jsx';
import { FaSearch } from "react-icons/fa"; 
import { IoInformationCircleOutline } from "react-icons/io5";
import { IoIosAdd } from 'react-icons/io';
/*Las cosas se importan donde se vayan a utilizar */ 


import '../styles/Note.css'

function Note(props) {


    /* */


     /*  Si hay algo en el array que son las notas, imprimira las notas, si no, imprimira ImagenPlaceHolder*/
    return(
        <>
        <Header>
            <h1 className='note__title'>Notes</h1>
                <div className='note__groupIcon'>
                <ButtonIcon icon={<IoInformationCircleOutline/>}/>
                <ButtonIcon icon={<FaSearch/>}/>
                </div>
        </Header>

        <div className='note_container'>
           
            {props.notes.length !== 0 ? 
            props.notes.map((elem, index) => <NoteItem key={index} title={elem.title} description={elem.description} color={"#e33333"}/>)
        : <ImagePlaceHolder Image='..\src\assets\react.svg' text='Crea una nueva'/>}

            
        </div>
        <Link to={"/edit"} className='note__add'>
            <IoIosAdd />
        </Link>

        
    </>
    )
}

export default Note
