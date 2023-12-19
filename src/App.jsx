import './App.css'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createClient } from '@supabase/supabase-js'

import { AuthContext } from './context/AuthContext';
import Dashboard from './components/page/dashboard'
import Home from './components/page/home'
import Profile from './components/page/profile'
import PublicPage from './components/page/publicpage';
import SignIn from './components/page/login'
import SignUp from './components/page/register'

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey)

function App() { 
  const [user, setUser] = useState({});
    return (
      <main>
        <AuthContext.Provider value={{ user, setUser }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home supabase={supabase} />}/>
              <Route path="/profile/:id" element={<Profile supabase={supabase} />} />
              <Route exact path="/profile/:id/dashboard" element={<Dashboard supabase={supabase} />} />
              <Route path="/login" element={<SignIn supabase={supabase} />} />
              <Route path="/register" element={<SignUp supabase={supabase} />} />
              <Route path="/:userId/profile/:id" element={<PublicPage supabase={supabase} />} />
            </Routes>
          </BrowserRouter>
        </AuthContext.Provider>
      </main>
    )
}

export default App;
