import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/page/home'
import Profile from './components/page/profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      {/* <Home/> */}
      <Profile/>
    </main>
  )
}

export default App
