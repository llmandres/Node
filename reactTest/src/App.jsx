import  React, { useState }  from 'react'
import Note from './pages/Note'
import ImagePlaceHolder from './components/ImagenPlaceHolder'
import Modal from './components/Modal'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FilterInput from './components/FilterInput'
/*Las cosas se importan donde se vayan a utilizar */ 


import './App.css'
import EditNote from './pages/EditNote'
import Counter from './components/Counter'

function App() {

    const [notes, setNotes] = useState([])
    /* */
    return(
        <div className='app'>
        { <BrowserRouter>
            <Routes>
                <Route path='/' element={<Note notes = {notes}></Note>}/>
                <Route path='/edit' element={<EditNote notes={notes} setNotes={setNotes}></EditNote>}/>
n            </Routes>
        </BrowserRouter> }
        </div>
    )
}

export default App
