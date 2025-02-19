import  React, {useState} from 'react'
import '../styles/EditNote.css'

import Header from '../components/Header'
import ButtonIcon from '../components/ButtonIcon'
import { MdArrowBackIos } from "react-icons/md";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import TextareaAutosize from 'react-textarea-autosize';
import { useNavigate } from 'react-router-dom';



function EditNote(props) {
    const [title, setTitle] = useState('');  // Esto para el estado
    const [description, setDescription] = useState('');  // Esto para el estado (descripcion)
    const navigate = useNavigate()
    const handlerClick = () =>{
        navigate("/")
    }
    const handlerChangeTitle = (e) => {
        setTitle(e)
    }
    const handlerChangeDescription = (e) => {
        setDescription(e)
    }
    const handlerClickSave = () =>{
        const note = {title , description}
        props.setNotes([note, ...props.notes])
        navigate("/")
    }

    return(
        <div className="editNote">
        <Header>
        <ButtonIcon icon={<MdArrowBackIos />} onClick={handlerClick}/>
            <div className='editNote__groupIcon'>
            <ButtonIcon icon={<MdOutlineRemoveRedEye/>}/>
            <ButtonIcon icon={<FaSave />}
            onClick={handlerClickSave}
            />
            </div>
        </Header>

        <div className='editNote__inputWrapper'>
        <TextareaAutosize placeholder='Title' 
        className='editNote__input editNote__input--title' 
        maxRows={4}
        onChange={(e) => handlerChangeTitle(e.target.value)}
        value={title}
        />  
        <TextareaAutosize placeholder='Type something...'
         className='editNote__input editNote__input--description' 
         minRows={3}
         onChange={(e) => handlerChangeDescription(e.target.value)}
         value={description}>
         </TextareaAutosize>
        </div>
        </div>

    )
}

export default EditNote
