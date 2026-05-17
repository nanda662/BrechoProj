import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Sumario from './componentes/Sumario'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/adm-dashboard" element={<Dashboard />}>  //layout pai
          <Route
            index  //rota filha de outra rota
            element={<Sumario />}
          />
          <Route 
          path="produtos" 
          element={<h1>Produtos</h1>} 
          />
          <Route 
            path="pedidos" 
            element={<h1>Pedidos</h1>} 
          />
          <Route 
            path="categorias" 
            element={<h1>Categorias</h1>} 
          />
          <Route 
            path="configuracoes" 
            element={<h1>Configurações</h1>} 
          />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
