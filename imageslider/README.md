# Image Slider

A React image slider that loads images from an API and displays them one at a time. Users can move between images with the previous and next arrow controls or jump directly to an image with the circular indicators below the slider.

The demo uses the [Picsum Photos API](https://picsum.photos/) to provide a collection of images.

## Features

- Fetches a configurable list of images from an API.
- Displays one image at a time.
- Previous and next navigation with wraparound behavior.
- Circular indicators for direct slide selection.
- Reusable component props for the API URL, page, and image limit.
- Responsive state updates when the image source changes.

## Tech Stack

- React 19
- Vite
- JavaScript (JSX)
- `react-icons`
- Oxlint

## Getting Started

From this project directory:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite in your browser.

## Available Scripts

| Command           | Description                                         |
| ----------------- | --------------------------------------------------- |
| `npm run dev`     | Starts the Vite development server with hot reload. |
| `npm run build`   | Creates a production build in `dist/`.              |
| `npm run preview` | Serves the production build locally.                |
| `npm run lint`    | Checks the project with Oxlint.                     |

## Component Usage

The slider component is located at `src/components/index.jsx` and accepts these props:

| Prop    | Type                 | Default | Description                           |
| ------- | -------------------- | ------- | ------------------------------------- |
| `url`   | `string`             | None    | Base URL used to fetch the images.    |
| `page`  | `number` or `string` | `1`     | Page query parameter sent to the API. |
| `limit` | `number` or `string` | `5`     | Number of images requested.           |

Example:

```jsx
import ImageSlider from "./components/index";

function App() {
  return (
    <ImageSlider url="https://picsum.photos/v2/list" page={1} limit={10} />
  );
}
```

The component requests images using the following format:

```text
{url}?page={page}&limit={limit}
```

Each returned image is expected to include an `id` and `download_url`, matching the Picsum Photos response format.

## How It Works

1. When the component mounts, it fetches images from the supplied URL.
2. The response is stored in React state and the first image becomes the active slide.
3. Clicking the left or right arrow updates the active slide index.
4. Navigation wraps from the first image to the last, and from the last image back to the first.
5. Clicking an indicator sets the active slide directly.

## Project Structure

```text
src/
├── App.jsx
├── App.css
├── index.css
└── components/
		├── index.jsx
		└── style.css
```

## Notes

The slider depends on the configured image API being available and returning the expected response shape. For production use, consider adding visible loading and error states, keyboard navigation, accessible labels for the controls, and an `onChange` callback for the selected slide.
