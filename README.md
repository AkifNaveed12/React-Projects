# React Projects DevWeekends

![React](https://img.shields.io/badge/React-19.2.8-61DAFB?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-8.2.2-646CFF?style=flat-square&logo=vite)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2020-F7DF1E?style=flat-square&logo=javascript)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

A comprehensive collection of 6 production-ready React components and applications built with **Vite**, showcasing modern React patterns, state management, hooks, and component architecture. Perfect for learning React fundamentals or integrating reusable components into your projects.

---

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Projects](#projects)
- [Getting Started](#getting-started)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Usage Guide](#usage-guide)
- [Key Features](#key-features)
- [Learning Outcomes](#learning-outcomes)
- [Connect With Me](#connect-with-me)

---

## 🎯 Project Overview

This repository contains a curated collection of React projects created during **DevWeekends**, focusing on building practical, reusable components and applications. Each project demonstrates specific React concepts and best practices, from state management to API integration.

All projects are built with:

- ⚡ **Vite** - Lightning-fast build tool and dev server
- ⚛️ **React 19** - Latest React features and hooks
- 🎨 **Modern CSS** - Responsive and accessible styling
- 🧹 **Oxlint** - Fast linting for code quality

---

## 📦 Projects

### 1. 🎯 [Accordion Component](./acordian-component-project/accordian-project)

A flexible accordion component with support for single and multi-selection modes. Perfect for FAQs, collapsible content sections, or any scenario requiring expandable panels.

**Key Features:**

- ✅ Single Selection Mode - Only one item open at a time
- ✅ Multi Selection Mode - Multiple items can be open simultaneously
- ✅ Data-driven rendering from external data source
- ✅ Smooth state transitions
- ✅ Empty state handling

**Tech Stack:** React, Vite, JavaScript  
**Quick Start:**

```bash
cd acordian-component-project/accordian-project
npm install && npm run dev
```

---

### 2. 🖼️ [Image Slider](./imageslider)

A dynamic image carousel component that fetches images from an API and provides intuitive navigation with previous/next arrows and direct slide selection via circular indicators.

**Key Features:**

- 🔄 API Integration with Picsum Photos
- ⬅️➡️ Previous/Next Navigation with Wraparound
- 🎯 Direct Slide Selection via Indicators
- 📱 Responsive Design
- ⚙️ Configurable Props (URL, page, limit)

**Tech Stack:** React, Vite, Axios/Fetch API, react-icons  
**Quick Start:**

```bash
cd imageslider
npm install && npm run dev
```

---

### 3. 📥 [Load More Products](./loadMoreProducts)

A progressive data loading component demonstrating client-side pagination. Fetches product data from DummyJSON API and appends results without page reloads.

**Key Features:**

- 📊 Infinite Scroll Pattern with "Load More" Button
- 🔗 API Integration with DummyJSON
- 📦 Responsive Product Grid
- 🎯 Efficient Pagination with Skip Parameter
- 🖼️ Product Image & Title Display

**Tech Stack:** React, Vite, REST API, Oxlint  
**Quick Start:**

```bash
cd loadMoreProducts
npm install && npm run dev
```

---

### 4. 🎨 [Random Color Generator](./random-color-generator-project/randomColorGenerator)

An interactive color generation utility that creates random colors in HEX or RGB formats and applies them as the page background. Great for design inspiration or educational purposes.

**Key Features:**

- 🎨 HEX Color Generation (#XXXXXX format)
- 🌈 RGB Color Generation (rgb(r,g,b) format)
- 🔀 Mode Switching Between HEX and RGB
- 🎯 One-Click Color Generation
- 📋 Live Color Display

**Tech Stack:** React, Vite, JavaScript, CSS  
**Quick Start:**

```bash
cd random-color-generator-project/randomColorGenerator
npm install && npm run dev
```

---

### 5. ⭐ [Star Rating Component](./stars-rating-project/starsrating)

An interactive star rating component with visual feedback. Hover over stars to preview ratings, click to select, and watch the state persist until a new selection is made.

**Key Features:**

- ⭐ Configurable Star Count
- 🎯 Interactive Rating Selection
- 🔄 Hover Preview with State Restoration
- ♿ react-icons Integration
- 🎨 Smooth Visual Feedback

**Tech Stack:** React, Vite, react-icons  
**Quick Start:**

```bash
cd stars-rating-project/starsrating
npm install && npm run dev
```

---

### 6. 🌳 [TreeView Component](./treeView)

A recursive hierarchical tree component for displaying nested navigation menus or file structures. Supports unlimited nesting levels with smooth expand/collapse animations.

**Key Features:**

- 🔄 Recursive Component Architecture
- 📂 Unlimited Nesting Levels
- ➕➖ Expand/Collapse Functionality
- 🎯 Icon Indicators (Plus/Minus)
- 📊 Flexible Data Structure

**Tech Stack:** React, Vite, react-icons  
**Quick Start:**

```bash
cd treeView
npm install && npm run dev
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.0 or higher
- **npm** 9.0 or higher
- Basic understanding of React and JavaScript

### Quick Setup (Any Project)

1. **Navigate to desired project:**

   ```bash
   cd <project-folder>
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start development server:**

   ```bash
   npm run dev
   ```

4. **Open in browser:**
   - Vite will output the local URL (typically `http://localhost:5173`)
   - Open the URL in your web browser

---

## 🛠️ Tech Stack

### Core Technologies

| Technology | Version | Purpose                 |
| ---------- | ------- | ----------------------- |
| React      | 19.2.8  | UI Library              |
| React DOM  | 19.2.8  | DOM Rendering           |
| Vite       | 8.2.2   | Build Tool & Dev Server |
| JavaScript | ES2020+ | Language                |
| CSS3       | Latest  | Styling                 |

### Supporting Libraries

| Library     | Version | Purpose         |
| ----------- | ------- | --------------- |
| react-icons | 5.7.0   | Icon Components |
| Oxlint      | 1.79.0  | Code Linting    |

---

## 📁 Project Structure

```
react-projects-devweekends/
├── README.md (this file)
│
├── acordian-component-project/
│   └── accordian-project/
│       ├── src/
│       │   ├── components/accordian/
│       │   ├── App.jsx
│       │   └── main.jsx
│       ├── package.json
│       └── README.md
│
├── imageslider/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── README.md
│
├── loadMoreProducts/
│   ├── src/
│   │   ├── components/load-more-data/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── README.md
│
├── random-color-generator-project/
│   └── randomColorGenerator/
│       ├── src/
│       │   ├── components/random-color/
│       │   ├── App.jsx
│       │   └── main.jsx
│       ├── package.json
│       └── README.md
│
├── stars-rating-project/
│   └── starsrating/
│       ├── src/
│       │   ├── components/star-rating/
│       │   ├── App.jsx
│       │   └── main.jsx
│       ├── package.json
│       └── README.md
│
└── treeView/
    ├── src/
    │   ├── components/tree-view/
    │   ├── App.jsx
    │   └── main.jsx
    ├── package.json
    └── README.md
```

---

## 💻 Installation & Setup

### Install Dependencies Across All Projects

Run this script to install dependencies in all project folders:

```bash
# Windows (PowerShell)
Get-ChildItem -Directory | ForEach-Object {
  Set-Location $_.FullName
  npm install
  Set-Location ..
}

# macOS/Linux (Bash)
for dir in */; do
  cd "$dir"
  npm install
  cd ..
done
```

### Common npm Scripts (Available in all projects)

```bash
# Development server with hot reload
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

---

## 📖 Usage Guide

### Running Individual Projects

Each project is independent and can be run separately. Navigate to any project folder and follow these steps:

```bash
# Example: Running the Accordion Component
cd acordian-component-project/accordian-project
npm install
npm run dev
```

Then open `http://localhost:5173` in your browser.

### Integrating Components Into Your Project

Most components are designed to be reusable. Here's how to integrate them:

1. **Copy the component folder** from `src/components/` of any project
2. **Update import paths** in your project
3. **Install required dependencies** (e.g., react-icons for some components)
4. **Import and use** in your application

Example:

```jsx
import StarRating from "./components/star-rating/rating";

export default function MyApp() {
  return <StarRating noOfStars={5} />;
}
```

---

## ⚡ Key Features

### React Concepts Demonstrated

- ✅ Functional Components & Hooks (useState, useEffect)
- ✅ Event Handling & State Management
- ✅ Conditional Rendering & Lists
- ✅ Props & Component Reusability
- ✅ API Integration & Data Fetching
- ✅ Recursive Components (TreeView)
- ✅ Form Handling & User Input

### Code Quality

- 📋 Oxlint for consistent code style
- 📦 ES2020+ JavaScript features
- ♿ Semantic HTML & Accessibility
- 📱 Mobile-responsive design
- 🎨 Modern CSS3 styling

### Performance

- ⚡ Vite's optimized build process
- 🔥 Hot Module Replacement (HMR)
- 📦 Code splitting & lazy loading ready
- 🎯 Optimized component rendering

---

## 📚 Learning Outcomes

By exploring these projects, you'll learn:

1. **React Fundamentals**
   - Component composition and reusability
   - State management with hooks
   - Event handling and user interactions

2. **Modern Development**
   - Vite build tool configuration
   - ES2020+ JavaScript features
   - Development workflow best practices

3. **Component Patterns**
   - Container/Presentational components
   - Recursive component architecture
   - Props-based configuration

4. **API Integration**
   - Fetching data from external APIs
   - Handling async operations
   - Error handling and loading states

5. **Styling & UX**
   - Responsive CSS design
   - Icon integration with react-icons
   - User feedback and interaction states

---

## 🤝 Contributing

Feel free to fork this repository and add improvements! Some ideas:

- Add TypeScript support
- Implement additional features in existing projects
- Create new related components
- Improve documentation
- Add unit tests with Jest/Vitest
- Optimize performance

---

## 📝 License

This project collection is open source and available under the MIT License. Feel free to use these components in your personal and commercial projects.

---

## 🔗 Connect With Me

I'm passionate about React development and web technologies. Let's connect!

### 💼 LinkedIn

[Akif Naveed Malik](https://www.linkedin.com/in/akif-naveed-malik30)

### 💻 GitHub

[@AkifNaveed12](https://github.com/AkifNaveed12)

### 🌐 Portfolio

[Portfolio - Muhammad Akif Naveed](https://portfolio-muhammad-akif-naveed.vercel.app/)

---

## 📞 Support

If you have questions or encounter issues:

1. **Check individual project READMEs** - Each project has detailed documentation
2. **Review the code comments** - Implementation details are explained
3. **Open an issue on GitHub** - Describe the problem and expected behavior
4. **Connect on LinkedIn** - Feel free to reach out for discussions

---

## 🎉 Acknowledgments

These projects were created as part of the **DevWeekends** initiative, focusing on practical React development and component design patterns.

Thank you for exploring this collection! Happy coding! 🚀

---

**Last Updated:** August 2026  
**React Version:** 19.2.8  
**Vite Version:** 8.2.2
