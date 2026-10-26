import { useState } from "react";
import { Routes, Route, NavLink } from "react-router";
import Board from "./pages/Board";
import ImageDetail from "./pages/ImageDetail";
import Liked from "./pages/Liked";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { shuffle } from "./utils/shuffle";
import "./App.css";

const startingImages = [
  { id: 1, src: "/images/photo1.jpg", title: "Yesterday", tags: ["family", "summer"] },
  { id: 2, src: "/images/photo2.jpg", title: "Today", tags: ["city"] },
  { id: 3, src: "/images/photo3.jpg", title: "Tomorrow", tags: ["summer", "city"] },
  { id: 4, src: "/images/photo4.jpg", title: "First snow", tags: ["winter", "family"] },
  { id: 5, src: "/images/photo5.jpg", title: "Ocean walk", tags: ["summer", "nature"] },
  { id: 6, src: "/images/photo6.jpg", title: "Grandma's kitchen", tags: ["family"] },
];

function App() {
  const [images, setImages] = useState(startingImages);
  const [likedIds, setLikedIds] = useState([]);
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState(null);

  // calculated from state (not stored)
  const likedCount = images.filter((img) => likedIds.includes(img.id)).length;
  const allTags = [...new Set(images.flatMap((img) => img.tags))];
  const visible = images
    .filter((img) => img.title.toLowerCase().includes(query.toLowerCase()))
    .filter((img) => !activeTag || img.tags.includes(activeTag));

  function sortByTitle() {
    setImages([...images].sort((a, b) => a.title.localeCompare(b.title)));
  }

  function removeImage(id) {
    setImages(images.filter((img) => img.id !== id));
  }

  function toggleLike(id) {
    setLikedIds(
      likedIds.includes(id)
        ? likedIds.filter((x) => x !== id)
        : [...likedIds, id]
    );
  }

  // OPTIONAL: drag to rearrange
  function moveImage(fromId, toId) {
    if (fromId === toId) return;
    // find both positions BEFORE changing anything
    const fromIndex = images.findIndex((img) => img.id === fromId);
    const toIndex = images.findIndex((img) => img.id === toId);
    const copy = [...images];
    const [moved] = copy.splice(fromIndex, 1); // take it out
    copy.splice(toIndex, 0, moved);            // put it in the target's spot
    setImages(copy);
  }

  return (
    <>
      {/* STRETCH: NavLink adds an "active" class to the link for the current page */}
      <nav>
        <NavLink to="/" end>Board</NavLink>
        <NavLink to="/liked">Liked ({likedCount})</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <Board
              images={visible}
              allTags={allTags}
              activeTag={activeTag}
              onTagChange={setActiveTag}
              likedIds={likedIds}
              likedCount={likedCount}
              query={query}
              onQueryChange={setQuery}
              onShuffle={() => setImages(shuffle(images))}
              onSort={sortByTitle}
              onReset={() => setImages(startingImages)}
              onToggleLike={toggleLike}
              onRemove={removeImage}
              onMove={moveImage}
            />
          }
        />
        <Route path="/image/:id" element={<ImageDetail images={images} />} />
        <Route
          path="/liked"
          element={
            <Liked
              images={images.filter((img) => likedIds.includes(img.id))}
              onToggleLike={toggleLike}
              onRemove={removeImage}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
