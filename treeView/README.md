# TreeView Component

A recursive React component that renders a hierarchical tree/menu structure with expand/collapse functionality. Perfect for displaying nested navigation menus, file systems, or any hierarchical data.

## Features

- ✨ **Recursive Component Architecture** - Handles unlimited nesting levels
- 🎯 **Expand/Collapse Functionality** - Toggle visibility of child items with smooth UI
- 🎨 **Icon Support** - Uses `react-icons` for intuitive plus/minus indicators
- ⚡ **Built with Vite** - Fast development experience with hot module replacement (HMR)
- 🧹 **Code Quality** - Includes Oxlint for code linting

## Project Structure

```
treeView/
├── src/
│   ├── components/
│   │   └── tree-view/
│   │       ├── index.jsx          # Main TreeView component
│   │       ├── menu-list.jsx      # Component for rendering list of menu items
│   │       ├── menu-item.jsx      # Individual menu item with expand/collapse logic
│   │       ├── data.js            # Sample hierarchical menu data
│   │       └── styles.css         # Component styles
│   ├── App.jsx                    # Root component
│   ├── App.css                    # App styles
│   ├── index.css                  # Global styles
│   └── main.jsx                   # Entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Installation

1. Navigate to the treeView directory:

```bash
cd treeView
```

2. Install dependencies:

```bash
npm install
```

## Usage

### Development Server

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

Build the project for production:

```bash
npm run build
```

### Linting

Run Oxlint to check code quality:

```bash
npm run lint
```

### Preview

Preview the production build locally:

```bash
npm run preview
```

## Component API

### TreeView Component

The main container component for displaying the tree.

```jsx
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";

<TreeView menus={menus} />;
```

**Props:**

- `menus` (array): Array of menu objects with the following structure:

```javascript
{
  label: string,          // Display text for the menu item
  to: string,             // Route or path (optional)
  children: array         // Nested menu items (optional)
}
```

### Data Structure

Example menu structure:

```javascript
const menus = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Profile",
    to: "/profile",
    children: [
      {
        label: "Details",
        to: "details",
        children: [
          {
            label: "Location",
            to: "location",
            children: [
              {
                label: "City",
                to: "city",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "Settings",
    to: "/settings",
    children: [
      {
        label: "Account",
        to: "account",
      },
    ],
  },
];
```

## How It Works

1. **TreeView** - Accepts menu data and renders a `MenuList`
2. **MenuList** - Maps over the menu array and renders individual `MenuItems`
3. **MenuItem** - Displays a single menu item with:
   - Label text
   - Plus/Minus icon (if children exist)
   - Toggle state management for expanding/collapsing
   - Recursive `MenuList` for nested children

The component uses React's `useState` hook to manage the expand/collapse state and displays child items when toggled.

## Technologies Used

- **React** (^19.2.8) - UI library
- **React DOM** (^19.2.8) - DOM rendering
- **React Icons** (^5.7.0) - Icon library (FaPlus, FaMinus)
- **Vite** (^8.2.2) - Build tool and dev server
- **Oxlint** (^1.79.0) - Code linter

## Styling

The component uses CSS for styling with three main files:

- `styles.css` - Tree view component styles
- `App.css` - Application styles
- `index.css` - Global styles

Customize the appearance by editing the CSS files or modifying the className references in JSX components.

## Browser Support

Works in all modern browsers that support ES2020 and React 19.

## License

This project is part of the React Projects DevWeekends collection.

## Notes

- The component supports unlimited nesting levels
- Each menu item can optionally have child items
- The expand/collapse state is managed independently for each menu item
- Icons are conditionally rendered only when children exist
