import React, { useState } from 'react';
import ButtonIcon from '../components/ButtonIcon.jsx';
import Header from '../components/Header.jsx';
import NoteItem from '../components/NoteItem.jsx';
import { Link } from 'react-router-dom';
import ImagePlaceHolder from '../components/ImagenPlaceHolder.jsx';
import { FaSearch } from "react-icons/fa"; 
import { IoInformationCircleOutline } from "react-icons/io5";
import { IoIosAdd } from 'react-icons/io';
import FilterInput from '../components/FilterInput.jsx';
import colors from '../assets/colors.js';
import placeholderImage from '../assets/react.svg'; // Import the image directly

import '../styles/Note.css';

function Note(props) {
    const [state, setState] = useState('list');
    const [searchValue, setSearchValue] = useState('')

    const notesFiltered = (props.notes.filter((e) => e.title.toLowerCase().includes(searchValue.toLowerCase)))

    const handlerClickFilter = () => {
        setState('filter');
    };
    const handlerClickFilterClose = () => {
        setState('list');
    };
    const handlerChangeInput =  (e) =>{
        setSearchValue(e.target.value)
    }

    return (
        <>
            <Header>
                {state === 'list' ? (
                    <>
                        <h1 className='note__title'>Notes</h1>
                        <div className='note__groupIcon'>
                            <ButtonIcon icon={<IoInformationCircleOutline />} />
                            <ButtonIcon icon={<FaSearch />} onClick={handlerClickFilter} />
                        </div>
                    </>
                ) : (
                    <FilterInput onClick={handlerClickFilterClose} onChange={handlerChangeInput} />
                )}
            </Header>

            <div className='note_container'>
                {props.notes.length !== 0 ? 
                    notesFiltered.map(elem => (
                        <NoteItem 
                            key={elem.id} 
                            title={elem.title} 
                            description={elem.description} 
                            date={elem.date} 
                            color={elem.color} 
                        />
                    )) : (
                    <ImagePlaceHolder Image={placeholderImage} text='Crea una nueva' />
                )}
            </div>

            <Link to="/edit" className='note__add' aria-label="Add a new note">
                <IoIosAdd />
            </Link>
        </>
    );
}

export default Note;