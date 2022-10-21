import QuoteBox from './components/QuoteBox'
import quotes from './quotes.json'
import './App.css'
import Author from './components/Author'
import { useState } from 'react'

function App() {


  
  const [index, setIndex] = useState(Math.floor(Math.random() * quotes.length))

  const changeIndex = () =>{
    setIndex(Math.floor(Math.random() * quotes.length));
}
const colors = [
  "#845EC2",
  "#D65DB1",
  "#FF6F91",
  "#FF9671",
  "#FFC75F",
  "#2C73D2",
  "#008F7A",
  "#41227F"
];  


  const randomColorIndex = Math.floor(Math.random() * colors.length);
  document.body.style = `background: ${(colors[randomColorIndex])}`
  
  return (
    <div className="App" style={{ color: colors[randomColorIndex] }}>
      <div className="Card">
        <QuoteBox
        phrase={quotes[index].quote}
        />
        <Author 
        nameAuthor={quotes[index].author}
        />
        <button onClick={changeIndex} style={{background: colors[randomColorIndex]}}><i className="fa-solid fa-chevron-right"></i></button>
      </div>
    </div>
  )
}

export default App
