import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { AuthSimpleProvider } from './contextos/AuthSimple.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthSimpleProvider>
      <App />
    </AuthSimpleProvider>
  </StrictMode>,
)
