import  React  from 'react'
import '../styles/EditNote.css'

import Header from '../components/Header'
import ButtonIcon from '../components/ButtonIcon'
import { MdArrowBackIos } from "react-icons/md";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import TextareaAutosize from 'react-textarea-autosize';
import { useNavigate } from 'react-router-dom';



function EditNote() {
    const navigate = useNavigate()
    const handlerClick = () =>{
        navigate("/")
    }

    return(
        <div className="editNote">
        <Header>
        <ButtonIcon icon={<MdArrowBackIos />} onSmash={handlerClick}/>
            <div className='editNote__groupIcon'>
            <ButtonIcon icon={<MdOutlineRemoveRedEye/>}/>
            <ButtonIcon icon={<FaSave />}/>
            </div>
        </Header>
        <div className='editNote__inputWrapper'>
        <TextareaAutosize placeholder='Title' className='editNote__input editNote__input--title' maxRows={4}></TextareaAutosize>
        <TextareaAutosize placeholder='Type something...' className='editNote__input editNote__input--description' minRows={3}></TextareaAutosize>
        </div>
        </div>

    )
}

export default EditNote
