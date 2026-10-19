import { useState } from "react";
import ImageCard from "./components/ImageCard";
import "./App.css";
import { shuffle } from "./utils/shuffle";

const startingImages = [
  { id: 1, src: "images/photo1.jpg", title: "Yesterday" },
  { id: 2, src: "images/photo2.jpg", title: "Today" },
  { id: 3, src: "images/photo3.jpg", title: "Tomorrow" },
];

function App() {
  const [images, setImages] = useState(startingImages);

  // //broken, will only sort once and then not update the state correctly
  // function sortByTitle() {
  //   images.sort((a, b) => a.title.localeCompare(b.title));
  //   setImages(images);
  // }

  //fixed version of sortByTitle
  function sortByTitle() {
    const sorted = [...images].sort((a, b) => a.title.localeCompare(b.title));
    setImages(sorted);
  }

   function removeImage(id) {
      setImages(images.filter((img) => img.id !== id));
    }
  return (
    <>
      <button onClick={() => setImages(shuffle(images))}>Shuffle</button>
      <button onClick={sortByTitle}>Sort A–Z</button>

      <div className="board">
        {images.map((img) => (
          <ImageCard key={img.id} image={img} onRemove={removeImage} />
        ))}
      </div>
    </>
  );
}

export default App;