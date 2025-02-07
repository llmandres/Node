import  React  from 'react'
import  ButtonIcon  from '../components/ButtonIcon.jsx'
import  Header  from '../components/Header.jsx'
import NoteItem from '../components/NoteItem.jsx';
import { FaSearch } from "react-icons/fa"; 
import { IoInformationCircleOutline } from "react-icons/io5";
/*Las cosas se importan donde se vayan a utilizar */ 


import '../styles/Note.css'

function Note() {

    const data = [{"id":"6597173e-d600-4d77-972c-0a42b655726d","titulo":"Half Light","descripcion":"rudzrzywlikishqljgonvpztgyquznkkkkmvusnluozdoxmeixszlsyr","color":"#64d1e6"},
        {"id":"7875ba39-a73f-4751-926d-8871547848c3","titulo":"Kung Fu Panda: Secrets of the Furious Five","descripcion":"eviawpkxywtpgdwgatwwaqobwtydqtsckomqyfefipjizjpxgvpxzsbp","color":"#1091dd"},
        {"id":"09acb98e-f954-4162-89e8-675440925a90","titulo":"Elia Kazan: A Director's Journey","descripcion":"dudwfubtrgdfadsadzfjmzxdgqwwjdkckrhagyeoirxadeoqbmjqxzcp","color":"#da574d"},
        {"id":"489a4139-47fe-41cb-9b0a-540beb57cc3d","titulo":"Rosewood","descripcion":"hxgkwckvktahxwlaoinrrxxpssogjbohbjnfnsvtsbwtctfvzhdyyyrz","color":"#ae4542"},
        {"id":"620bdc1b-489f-4659-84c7-d209ebaa6724","titulo":"The Damned","descripcion":"qjergatkhmeyrlgjjejumbukmmixarjxtytmqztepgxuvslotlbcsurw","color":"#520846"}]
    /* */
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
        {data.map(elem => <NoteItem key={elem.key} title={elem.titulo} description={elem.descripcion} color={elem.color}/>)}


        </div>

        
    </>
    )
}

export default Note
