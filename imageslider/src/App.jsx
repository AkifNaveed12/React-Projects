import { useState } from 'react'
import './App.css'
import ImageSlider from './components/index'

function App() {
  const [count, setCount] = useState(0)

  return (
    // image slider compoennet
    <ImageSlider url={'https://picsum.photos/v2/list'} page={'1'} limit={"10"} />
  )
}

export default App
