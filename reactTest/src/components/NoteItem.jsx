import  React  from 'react'
import '../styles/NoteItem.css'
import { Link } from 'react-router-dom'
/* */


export default function NoteItem(props) {
    return(

        <Link className='noteItem' to={"/edit/" + props.id}  style={{backgroundColor : props.color}}>
            <h1 className='noteItem_title'>{props.title}</h1>
            <p className='noteItem_desc'>{props.description}</p>
            <p className='noteItem_date'>{props.date}</p>

        </Link>
    )
 
}
