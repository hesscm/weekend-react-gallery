import GalleryPicture from '../GalleryPicture/GalleryPicture'

function GalleryList(props) {
    return(
        <>
            <h2>My Images</h2>
            {/* for loop to display each picture */}
            {props.galleryList.map (picture => (
                // specify what happens to each div in a separate component
                <GalleryPicture 
                    key={picture.id} //id
                    picture={picture} //picture object
                    updateLikeCount={props.updateLikeCount} //put function
                    deletePicture = {props.deletePicture} //delete function
                    />
            ))}
        </>
    );
}

export default GalleryList;