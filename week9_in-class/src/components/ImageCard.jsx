import {useState} from "react"; 
import './ImageCard.css'; 

function ImageCard({image}){
    const [liked, setLiked] = useState(false); 
    return (
        <>
            <div className="card">
                <img src={image.src} alt={image.id}></img>
                <p>{image.title}</p>
                <button onClick={() => setLiked(!liked)}>
                    {liked ? "♥" : "♡"}
                </button>
                <button></button>
            </div>
        </>
    )
}

export default ImageCard; 