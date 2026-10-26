import './App.css'
import ImageCard from './components/ImageCard.jsx';
import { useState } from 'react';
import { shuffle } from './utils/shuffle.js';

function App() {
  const startingImages = [
    { id: 1, src: "images/photo1.jpg", title: "Yesterday" },
    { id: 2, src: "images/photo2.jpg", title: "Today" },
    { id: 3, src: "images/photo3.jpg", title: "Tomorrow" },
  ];

  const[images, setImages] = useState(startingImages); 
  return (
    <>
      <button onClick={() => setImages(shuffle(images))}>Shuffle</button>
      <div className='board'>
        {images.map((img) => (
          <ImageCard key={img.id} image={img} />
        ))}
      </div>
    </>
  )
}

export default App
