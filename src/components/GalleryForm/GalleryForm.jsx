//show a form on the DOM that adds an image and description to the database
function GalleryForm (props) {
    return (
        <>
       
        {/* when completed, click the button and run addAnImage() in App.jsx */}
        <form className = "submit-form" onSubmit={props.addAnImage}> 
            <h3>Add an image</h3>
            {/* when fields are changed, update the newPicture variables with those fields */}
            <input placeholder="ex: images/name.jpg "type="text" id="path-input" onChange={
                (event) => props.setNewPicturePath(event.target.value)
            }/>
            <input placeholder="Image description" type="text" id="description-input" onChange={
                (event) => props.setNewPictureDescription(event.target.value)
            }/>
            <button type="submit">Add Image</button>
        </form>
        </>
    );
}

export default GalleryForm;