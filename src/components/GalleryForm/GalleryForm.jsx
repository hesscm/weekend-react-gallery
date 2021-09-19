import {useState} from 'react'

function GalleryForm (props) {
    return (
        <>
        <h3>Add an image: </h3>
        <form onSubmit={props.addAnImage}>
            <input placeholder="ex: images/name.jpg "type="text" id="path" onChange={
                (event) => props.setNewPicturePath(event.target.value)
            }/>
            <input placeholder="Image description" type="text" id="path" onChange={
                (event) => props.setNewPictureDescription(event.target.value)
            }/>
            <button type="submit">Add Image</button>
        </form>




        </>

    );
}

export default GalleryForm;