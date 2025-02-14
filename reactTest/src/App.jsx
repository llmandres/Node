import  React  from 'react'
import Note from './pages/Note'
import ImagePlaceHolder from './components/ImagenPlaceHolder'
import Modal from './components/Modal'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
/*Las cosas se importan donde se vayan a utilizar */ 


import './App.css'
import EditNote from './pages/EditNote'

function App() {
    /* */
    return(
        <div className='app'>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Note></Note>}/>
                <Route path='/edit' element={<EditNote></EditNote>}/>
n            </Routes>
        </BrowserRouter>
        </div>
    )
}

export default App
