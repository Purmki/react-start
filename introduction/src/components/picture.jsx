
import { useState } from "react"
import "./picture.css";

function Picture(props){
    const [currentImage, setCurrentImage] = useState(props.image.firstImage);
    function ImageClick  (newImage) {
        setCurrentImage(newImage);
    }
    return(
        
        <div className="container">

        <img className="smallImage" onClick={() => ImageClick(props.image.firstImage)} src={props.image.firstImage}  />
        <img className="smallImage"  onClick={() => ImageClick(props.image.secondImage)} src={props.image.secondImage}  />
        <img className="smallImage"  onClick={() => ImageClick(props.image.thirdImage)} src={props.image.thirdImage}  />
        <img className="smallImage"  onClick={() => ImageClick(props.image.fourthImage)} src={props.image.fourthImage}  />
        <img src={currentImage}></img>
        </div>
    );
    
}

export default Picture;