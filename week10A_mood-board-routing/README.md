# Mood Board, multi-page edition (Week 10A)

Example code for the Week 10A in-class activity. This matches the "Final code" section of the lesson: the Mood Board from Week 9A, split into pages with React Router, plus a tag filter.

The placeholder images in `public/images/` are solid colors with titles. Swap in your own.

## Run it

```bash
npm install
npm run dev
```

## What's in it

- `src/main.jsx`: wraps the app in `BrowserRouter`
- `src/App.jsx`: all the state, the nav, and the routes
- `src/pages/Board.jsx`: search, shuffle, sort, tag filter, and the grid
- `src/pages/ImageDetail.jsx`: one page per image at `/image/:id` (uses `useParams`)
- `src/pages/About.jsx`, `src/pages/NotFound.jsx`
- `vercel.json`: sends every path to `index.html` so refreshing on `/about` works on Vercel

## Things to try

- Shuffle, go to About, come back. The order is still there because the state lives in `App`.
- Visit `/image/999` and `/potato`.
