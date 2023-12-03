import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './components/page/home'
import Profile from './components/page/profile'
import SignIn from './components/page/login'

function App() {

  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<SignIn />} />
          {/* <Route path="/register" element={<Profile />} /> */}
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App;
