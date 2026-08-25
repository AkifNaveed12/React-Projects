import { useState } from 'react'
import './App.css'
import StarRating from './components/star-rating/rating'
function App() {
  const [count, setCount] = useState(0)

  return (
    // star rating componenet
    <StarRating  noOfStars={10}/>
  )
}

export default App
