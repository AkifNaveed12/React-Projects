# Star Rating Visualizer

A small React component that lets users choose a rating by clicking a row of stars. Moving over the stars previews a rating, and moving away restores the last selected value.

This project is part of the React projects in the DevWeekends workspace and is built with Vite.

## Features

- Renders a configurable number of stars.
- Highlights stars as the pointer moves across them.
- Saves the selected rating when a star is clicked.
- Restores the saved rating when the pointer leaves the star row.
- Uses `react-icons` for the star icons.

## Demo 


https://github.com/user-attachments/assets/29943209-894a-4c9e-960a-e138c9cda937


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

The component is located at `src/components/star-rating/rating.jsx` and accepts one prop:

| Prop        | Type     | Default | Description                     |
| ----------- | -------- | ------- | ------------------------------- |
| `noOfStars` | `number` | `5`     | The number of stars to display. |

Example:

```jsx
import StarRating from "./components/star-rating/rating";

function App() {
  return <StarRating noOfStars={10} />;
}
```

## How It Works

The component keeps two pieces of state:

- `rating` stores the star selected by the user.
- `hover` stores the star currently under the pointer for the temporary preview.

A star is styled as active when its index is less than or equal to the current hover value or selected rating. The selected value is currently managed inside the component and is not submitted to a backend.

## Project Structure

```text
src/
├── App.jsx
├── App.css
├── index.css
└── components/
		└── star-rating/
				├── rating.jsx
				└── styles.css
```

## Future Improvements

- Add keyboard controls and accessible labels for each rating.
- Expose a callback such as `onChange` for parent components.
- Add a reset option and support half-star ratings.
- Make the selected rating available to a form or API.
