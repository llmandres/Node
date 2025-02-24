import React, { useState, useId } from 'react';
import '../styles/EditNote.css';

import Header from '../components/Header';
import ButtonIcon from '../components/ButtonIcon';
import { RiPencilFill } from 'react-icons/ri';
import { MdArrowBackIos } from "react-icons/md";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { MdDelete } from 'react-icons/md';
import { FaSave } from "react-icons/fa";
import TextareaAutosize from 'react-textarea-autosize';
import { useNavigate, useParams } from 'react-router-dom';
import colors from '../assets/colors';

function EditNote(props) {

    const params = useParams()
    const idNote = params.id

    const noteSelected = props.notes.find((elem) => elem.id === idNote)

    const [title, setTitle] = useState(noteSelected ? noteSelected.title : ""); 
    const [description, setDescription] = useState(noteSelected ? noteSelected.description : "");  
    const [isEditable, setIsEditable] = useState(!noteSelected);
    const [isRemoveable, setIsRemoveable] = useState(!!noteSelected)
    const id = useId()
    const navigate = useNavigate();



    const handlerClick = () => {
        navigate("/");
    };

    const handlerChangeTitle = (e) => {
        setTitle(e);
        setIsRemoveable(false)
    };

    const handlerChangeDescription = (e) => {
        setDescription(e);
        setIsRemoveable(false)
    };

    const handlerClickSave = () => {
        if(noteSelected){
            const noteUnmodified = props.notes.filter(elem => elem.id !== idNote) // Elimino la nota modificada
            const note = { // Generar la modificacion de la nota
                id: noteSelected.id,
                date: noteSelected.date,
                title,
                description,
                color: noteSelected.color
            };
            props.setNotes([noteSelected, ...noteUnmodified]); // Guardar la nota modificada

            
        }else{

        const note = { // Crear nueva nota
            id,
            date: new Date().toLocaleString('es-ES'),
            title,
            description,
            color: colors[Math.floor(props.notes.length % colors.length)] 
        }
        props.setNotes([note, ...props.notes]);
    }
        navigate("/");
    };
    const handlerClickRemove = () => {
        if(noteSelected){
            const notesUnmodified = props.notes.filter(elem => elem.id !== idNote)
            props.setNotes([...notesUnmodified])
            
        }
        navigate("/");

    }

    return (
        <div className="editNote">
            <Header>
                <ButtonIcon icon={<MdArrowBackIos />} onClick={handlerClick} />
                <div className='editNote__groupIcon'>
                    <ButtonIcon icon={isEditable ? <MdOutlineRemoveRedEye /> : <RiPencilFill></RiPencilFill>}  onClick={()=> setIsEditable(!isEditable)}/>
                    <ButtonIcon icon={isRemoveable ?<FaSave /> : <MdDelete></MdDelete>} onClick={isRemoveable ? handlerClickRemove : handlerClickSave} />
                </div>
            </Header>

            <div className='editNote__inputWrapper'>
                <TextareaAutosize
                    placeholder='Title'
                    className='editNote__input editNote__input--title'
                    maxRows={4}
                    onChange={(e) => handlerChangeTitle(e.target.value)}
                    value={title}
                    disabled={!isEditable}
                />
                <TextareaAutosize
                    placeholder='Type something...'
                    className='editNote__input editNote__input--description'
                    minRows={3}
                    onChange={(e) => handlerChangeDescription(e.target.value)}
                    value={description}
                    disabled={!isEditable}
                />
            </div>
        </div>
    );
}

export default EditNote;