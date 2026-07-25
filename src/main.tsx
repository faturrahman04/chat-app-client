import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import App from './App.tsx'
import AuthLayout from './layouts/AuthLayout.tsx'
import LoginPage from './pages/auth/Login.tsx'
import RegisterPage from './pages/auth/Register.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>

      {/* Auth */}
      <Route element={<AuthLayout />}>
        <Route path='login' element={<LoginPage />} />
        <Route path='register' element={<RegisterPage />} />
      </Route>
      {/* Auth */}

      {/* Index App */}
      <Route path='/' element={<App />} />
    </Routes>
  </BrowserRouter>,
)
