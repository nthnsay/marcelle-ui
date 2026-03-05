# Images Directory

Place your downloaded images into the subfolders below. This keeps things organized and makes it easy to reference assets in code.

- hero/ — Homepage hero banner images (large landscape)
- features/ — Images for the feature rows on the landing page
- studio/ — Studio banner/backgrounds
- gallery/ — Gallery tiles and other decorative images

## Referencing images in code
You can reference images two ways.

1) Using the public folder (no import required)
- Save the file as `public/hero.jpg` (or another name) and reference with:
  ```jsx
  <img src={process.env.PUBLIC_URL + '/hero.jpg'} alt="..." />
  ```
- Pros: simple, no import; Cons: bypasses bundling/optimizations.

2) Using module imports from `src/assets/images/`
- Save the image in one of the subfolders above and import it in the component:
  ```jsx
  import heroImg from '../../assets/images/hero/hero.jpg';
  <img src={heroImg} alt="..." />
  ```
- Pros: works with bundler (hashing/optimization), easy to rename/move.

## Suggested naming
- Use lowercase with dashes, e.g., `main-hero.jpg`, `reformer-closeup.jpg`.
- Export images to reasonable sizes (e.g., 1600–2400px wide for hero) and compress.

## Next steps
- To switch the current hero to use an image in `src/assets/images/hero/`, tell me the filename and I’ll wire up the import and update `Header.js`.
