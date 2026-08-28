# Load More Products

A small React and Vite project that demonstrates client-side pagination with a **Load More Products** button. Products are fetched from the [DummyJSON Products API](https://dummyjson.com/docs/products), displayed in a responsive grid, and appended to the existing list without replacing previously loaded items.

## Features

- Loads the first 20 products automatically when the app starts
- Fetches the next 20 products when **Load More Products** is clicked
- Uses the API `skip` parameter to request the correct page
- Appends new products to the current list
- Displays each product's thumbnail and title

## Tech Stack

- React 19
- Vite
- JavaScript (JSX)
- DummyJSON Products API
- Oxlint

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

From this directory, install the dependencies:

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open the local URL printed by Vite in your browser.

## Available Scripts

| Command           | Description                                                    |
| ----------------- | -------------------------------------------------------------- |
| `npm run dev`     | Starts the Vite development server with hot module replacement |
| `npm run build`   | Creates a production build in `dist/`                          |
| `npm run preview` | Serves the production build locally                            |
| `npm run lint`    | Runs Oxlint against the project                                |

## How It Works

The main component is [`src/components/load-more-data/index.jsx`](src/components/load-more-data/index.jsx).

1. The component starts with an empty product list and a page counter of `0`.
2. An effect fetches 20 products from DummyJSON using `limit=20` and `skip=count * 20`.
3. The response products are appended to the existing state.
4. Clicking the button increments the counter, which triggers the next request.

For example, the first request uses `skip=0`, the second uses `skip=20`, and the third uses `skip=40`.

## Project Structure

```text
src/
├── components/
│   └── load-more-data/
│       ├── index.jsx       # Product fetching and rendering
│       └── styles.css      # Product grid and button styles
├── App.jsx                 # Application entry component
├── App.css                 # App-level styles
├── index.css               # Global styles
└── main.jsx                # React application bootstrap
```

## API Dependency

This project relies on the public DummyJSON endpoint:

```text
https://dummyjson.com/products?limit=20&skip=<offset>
```

Because the data is fetched at runtime, the development server needs network access. If the API is unavailable, no new products are added and the error is logged in the browser console.
