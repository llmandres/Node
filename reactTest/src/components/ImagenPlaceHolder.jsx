import  React  from 'react'
import '../styles/ImagenPlaceHolder.css'


function ImagePlaceHolder(props) {
    /* */
    return(
        <div className='imageplaceholder'>
            <img className='imageplaceholder__image' src={props.Image} alt="Imagen de primera nota" />
            <p className='imageplaceholder__text'>{props.text}</p>
        </div>
    )
}

export default ImagePlaceHolder
