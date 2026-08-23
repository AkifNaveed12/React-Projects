# Accordion Component

A React accordion built with Vite. It displays questions and answers and supports two modes:

- **Single selection:** only one item can be open at a time.
- **Multi selection:** any number of items can be open at the same time.

The project demonstrates React state, event handlers, conditional rendering, and data-driven collection rendering. The folder and component currently use the spelling `accordian`; the documentation uses the conventional spelling `accordion`.

## Features

- Renders items from `src/components/accordian/data.js`.
- Opens and closes an item by clicking its title.
- Replaces the open item when another item is clicked in single-selection mode.
- Keeps multiple answers open in multi-selection mode.
- Shows `No item Found !` when the data array is empty.
- Uses each item's `id` as the React key and state identifier.

## Getting started

Requirements: Node.js and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. Available scripts:

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start Vite with hot module replacement. |
| `npm run build` | Create the production build in `dist/`. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Run Oxlint. |

## Detailed implementation analysis

The main implementation is `src/components/accordian/index.jsx`.

### Data-driven rendering

`data.js` exports objects shaped like this:

```js
{
  id: '1',
  question: 'Question text',
  answer: 'Answer text'
}
```

`Accordian` maps over the data array and creates an `.item` for each object. The `id` is used as the React `key`, the question is rendered in `.title`, and the answer is conditionally rendered in `.content`. The `data && data.length > 0` check provides a fallback for an empty or unavailable list.

### Single-selection mode

```js
const [selected, setSelected] = useState(null)
```

`selected` stores one open item's id or `null`. `handleSingleSelection` uses a toggle expression:

```js
setSelected(getCurrentId === selected ? null : getCurrentId)
```

Clicking a closed item stores its id. Clicking the same item again clears it. Clicking a different item replaces the old id, so only one item is open through this state.

### Multi-selection mode

```js
const [multiple, setMultiple] = useState([])
```

`multiple` stores the ids of all open items. `handleMultiSelection` clones the current array, finds the clicked id with `indexOf`, and toggles it. An absent id is added with `push`; an existing id is removed with `splice`. The new array is then stored with `setMultiple`, so several answers can remain visible.

### Mode toggle and rendering

`enableMultiSelection` starts as `false`. The top button toggles it and determines which handler is attached to each title row. The content condition is:

```js
selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1
```

An answer is visible when its id exists in either state. Consequently, switching modes does not clear the other state's values. For example, items opened in multi-selection mode can remain visible after switching back to single-selection mode. This is the current behavior and should be reset explicitly if mode changes are expected to start clean.

### Current implementation notes

- `console.log` calls print clicked ids, the selected id, and array indexes; remove them for production.
- The clickable title is a `div`. A semantic `button` with `aria-expanded` and `aria-controls` would improve keyboard and screen-reader support.
- The `+` icon does not change when an item opens; it could reflect the active state.
- The component imports data directly. Passing data and the initial mode as props would make it reusable.

## Project structure

```text
src/
|-- App.jsx
|-- main.jsx
|-- components/accordian/
|   |-- data.js
|   |-- index.jsx
|   `-- styles.css
|-- App.css
`-- index.css
```
