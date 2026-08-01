import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import App from './App.tsx'
import AuthLayout from './layouts/AuthLayout.tsx'
import ChatLayout from './layouts/ChatLayout.tsx'
import LoginPage from './pages/auth/Login.tsx'
import RegisterPage from './pages/auth/Register.tsx'
import Chats from './pages/users/Chats.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>

      {/* Auth */}
      <Route element={<AuthLayout />}>
        <Route path='login' element={<LoginPage />} />
        <Route path='register' element={<RegisterPage />} />
      </Route>
      {/* Auth */}

      {/* Chat */}
      <Route element={<ChatLayout />}>
        <Route path='/chat' element={<Chats />} />
      </Route>
      {/* Chat */}

      {/* Index App */}
      <Route path='/' element={<App />} />
    </Routes>
  </BrowserRouter>,
)
