# Random Color Generator

A small React application that generates random colors in HEX or RGB format and uses the generated color as the page background.


## Demo 





https://github.com/user-attachments/assets/4a87a67b-22a1-4dcc-88c9-b88eef42176d


## Features

- Generate six-digit HEX colors such as `#A1B2C3`.
- Generate RGB colors such as `rgb(42,128,210)`.
- Switch between HEX and RGB generation modes.
- Generate a new color without leaving the page.
- Display the current color value in the selected format.

## Tech Stack

- React 19
- Vite
- JavaScript (JSX)
- Oxlint

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

From the project directory:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will print the local URL in the terminal, usually `http://localhost:5173`.

## Usage

1. Open the application in a browser.
2. Choose **Create HEX Color** or **Create RGB Color**.
3. Select **Generate Random Color** to create another value in the active format.
4. The generated value is shown on screen and applied to the page background.

The application starts in HEX mode with `#000000` as its initial state. Selecting a different mode immediately generates a color in that format.

## Available Scripts

| Command           | Description                                                    |
| ----------------- | -------------------------------------------------------------- |
| `npm run dev`     | Start the Vite development server with hot module replacement. |
| `npm run build`   | Create a production build in `dist/`.                          |
| `npm run preview` | Serve the production build locally.                            |
| `npm run lint`    | Run Oxlint against the project.                                |

## How It Works

The `RandomColor` component stores the active color format and generated color with React state:

- HEX generation selects six random characters from a hexadecimal character set and prefixes them with `#`.
- RGB generation creates independent random red, green, and blue values from `0` through `255`.
- A React effect generates a new color whenever the selected format changes.
- The current color is passed to the container's `backgroundColor` style.

## Project Structure

```text
src/
|-- App.jsx                         # Application root
|-- App.css                         # App-level styles
|-- index.css                       # Global styles
|-- main.jsx                        # React entry point
`-- components/
	`-- random-color/
		`-- Random.jsx              # Color generation and UI
```

## Build

To verify a production build:

```bash
npm run build
```

The generated files are written to the `dist/` directory.
