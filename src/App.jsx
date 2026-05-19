import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useContext } from 'react'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Sumario from './componentes/Sumario'
import { AuthSimpleContext } from './contextos/AuthSimple.jsx'

function ProtectedRoute({ children }) {
  const { autenticado } = useContext(AuthSimpleContext);
  
  const isDev = typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.MODE === 'development';
  if (isDev) return children;

  if (!autenticado) return <Navigate to="/login" replace />;
  return children;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />

        <Route path="/adm-dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}>
          <Route index element={<Sumario />} />
          <Route path="produtos" element={<h1>Produtos</h1>} />
          <Route path="pedidos" element={<h1>Pedidos</h1>} />
          <Route path="categorias" element={<h1>Categorias</h1>} />
          <Route path="configuracoes" element={<h1>Configurações</h1>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
