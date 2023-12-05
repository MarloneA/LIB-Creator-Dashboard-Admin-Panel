import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createClient } from '@supabase/supabase-js'

import './App.css'
import Home from './components/page/home'
import Profile from './components/page/profile'
import SignIn from './components/page/login'
import SignUp from './components/page/register'
import Dashboard from './components/page/dashboard'
import { AuthContext } from './context/AuthContext';

const supabaseUrl = 'https://vzhykbplsgtdrqdicjlb.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ6aHlrYnBsc2d0ZHJxZGljamxiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE2MjY0MDEsImV4cCI6MjAxNzIwMjQwMX0.oaCX_2R_tiYT4vpKACldJ3VH3uD8LFwuLg5xJAtUpLk'
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
              <Route path="/profile/:id/dashboard" element={<Dashboard supabase={supabase} />} />
              <Route path="/login" element={<SignIn supabase={supabase} />} />
              <Route path="/register" element={<SignUp supabase={supabase} />} />
            </Routes>
          </BrowserRouter>
        </AuthContext.Provider>
      </main>
    )
}

export default App;
