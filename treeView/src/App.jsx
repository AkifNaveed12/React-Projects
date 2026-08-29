
import './App.css'
import menus from './components/tree-view/data'
import TreeView from './components/tree-view'

function App() {

  return (
      // tree view/ menu ui/ recursive ui component
      <TreeView menus={menus} />

  )
}

export default App
