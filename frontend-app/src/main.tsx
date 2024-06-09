import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Login from '@views/login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import createStore from 'react-auth-kit/createStore';
import AuthProvider from 'react-auth-kit'
import RequireAuth from '@auth-kit/react-router/RequireAuth'
import './index.css'


const store = createStore({
  authName:'_auth',
  authType:'cookie',
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === 'http:',
});


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
            <RequireAuth fallbackPath="/login">
              <App />
            </RequireAuth>
          } />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider store={store}>
      <Router />
    </AuthProvider>
  </React.StrictMode>,
)
