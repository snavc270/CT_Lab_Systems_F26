import { useParams, Link } from "react-router";

function ImageDetail({ images }) {
  const { id } = useParams();
  const image = images.find((img) => img.id === Number(id));

  if (!image) {
    return (
      <div>
        <h1>Image not found</h1>
        <Link to="/">Back to board</Link>
      </div>
    );
  }

  // STRETCH: previous / next follow the board's current order (wrapping around)
  const index = images.indexOf(image);
  const prev = images[(index - 1 + images.length) % images.length];
  const next = images[(index + 1) % images.length];

  return (
    <div className="detail">
      <Link to="/">← Back to board</Link>
      <img src={image.src} alt={image.title} />
      <h1>{image.title}</h1>
      <p>Tags: {image.tags.join(", ")}</p>
      <div className="pager">
        <Link to={`/image/${prev.id}`}>← {prev.title}</Link>
        <Link to={`/image/${next.id}`}>{next.title} →</Link>
      </div>
    </div>
  );
}

export default ImageDetail;
