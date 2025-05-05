import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [sendMessage, setSendMesage] = useState<string>("")
  const [countLikes, setCountLikes] = useState<number>(0)
  const [changeColor, setChangeColor] = useState<string>("red")


  //for send message consoles
  useEffect(() => {
    console.log(`Message sent ${sendMessage}`)

  }, [sendMessage])

  const handleSendMessage = () => {
    if (sendMessage === "Hello From React!") {
      setSendMesage("")
      return
    }
    setSendMesage("Hello From React!")
  }


  //Likes
  useEffect(() => {
    if (countLikes > 0) {
      alert(`Likes has been updated to ${countLikes}!`)
    } 
   }, [countLikes])



   //Change Color
  useEffect(() => {
    console.log(`Current Color: ${changeColor}`)
  }, [changeColor])

  const handleColorChange = () => {
    setChangeColor(changeColor === "red" ? "green" : "red");
  };
  return (
    <div>
      <h2>Message Logger</h2>
      <button onClick={handleSendMessage}>{!sendMessage ? "send Message" : "clear Message"}</button>
      <h3>{sendMessage}</h3>
  
      <h2>Like Counter</h2>
      <button onClick={() => setCountLikes(prev => prev + 1)} >Like</button>
  
      <h2>Color Box</h2>
      <button onClick={handleColorChange} >Change Color</button>
      <div style={{ width: 100, height: 100, backgroundColor: changeColor }}>Color Box</div>
    </div>
  )
}

export default App
