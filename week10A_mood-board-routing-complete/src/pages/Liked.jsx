import { Link } from "react-router";
import ImageCard from "../components/ImageCard";

// STRETCH: a page that shows only liked images
function Liked({ images, onToggleLike, onRemove }) {
  if (images.length === 0) {
    return (
      <div>
        <h1>Liked images</h1>
        <p>
          Nothing liked yet. <Link to="/">Go to the board</Link> and tap ♡ on a few.
        </p>
      </div>
    );
  }

  return (
    <>
      <h1>Liked images</h1>
      <div className="board">
        {images.map((img) => (
          <ImageCard
            key={img.id}
            image={img}
            liked={true}
            onToggleLike={onToggleLike}
            onRemove={onRemove}
          />
        ))}
      </div>
    </>
  );
}

export default Liked;
