import {useState} from 'react';

//container to control individual picture data
function GalleryPicture(props) {
    //set a variable to toggle the picture
    const [description, setDescription] = useState(false);

        //function to toggle from description to the picture when clicked
        const togglePicture = () => {
            console.log('in togglePicture');
            if (description) { //if true, set to false
                setDescription(false);
            }
            else{ //if false, set to true
                setDescription(true);
            }
      }

      //send like button ID to the put route
      const handleLikeButton = (likeID) => {
          console.log('in handleLikeButton', likeID);
          props.updateLikeCount(likeID);
      }
      //send delete button id to the delete route
      const handleDelete = (deleteID) => {
          console.log('in handleDelete');
          props.deletePicture(deleteID);
      }

    return (
        <>
            <div className = "picture-box" >
                {/* if description is true, show the description. else, show the picture */}
                {description ? 
                // show description
                    <>
                        <p>{props.picture.description}</p>
                        {/*a way to temporariliy keep buttons in the same spot until I learn how to use CSS*/}
                        <br /><br /><br /><br /><br />
                    </> 
                    //else, show the picture
                :   <img  src={props.picture.path}/>
            
                } <br />
                    
                {/* click to add to the like count on the DOM*/}
                <p>Like Count: {props.picture.likes}</p>
                <button onClick={() => handleLikeButton(props.picture.id)}>Love it!</button><br />
                {/* click to delete the picture */}
                <button onClick={() => handleDelete(props.picture.id)}>Delete Picture</button>
                {/* click to show description or the picture */}
                <button onClick={togglePicture}>Show Description</button>
                <br />
            </div>
          </>
     );
}

export default GalleryPicture;

