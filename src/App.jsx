import './App.css'
//Importamos las rutas
import { BrowserRouter, Route, Routes } from 'react-router-dom'

//Importamos los componentes
import CompMostrarClientes from './componentes/CompMostrarClientes'
import CompMostrarProductos from './componentes/CompMostrarProductos'
import CompAgregarClientes from './componentes/CompAgregarClientes'
import CompEditarClientes from './componentes/CompEditarClientes'
import CompAgregarProductos from './componentes/CompAgregarProductos'
import CompEditarProductos from './componentes/CompEditarProductos'
import CompMenu from './componentes/CompMenu'
import CompFooter from './componentes/CompFooter'

function App() {
  

  return (
    <div className='App'>
      <CompMenu/>
      <BrowserRouter>
      <Routes>

      {/* Clientes */}
      <Route path='/clientes'element={<CompMostrarClientes/>}></Route>
      <Route path='/clientes/agregar'element={<CompAgregarClientes/>}></Route>
      <Route path='/clientes/editar/:id'element={<CompEditarClientes/>}></Route>

      {/* Productos */}
      <Route path='/productos'element={<CompMostrarProductos/>} ></Route>
      <Route path='/productos/agregar'element={<CompAgregarProductos/>} ></Route>
      <Route path='/productos/editar/:id'element={<CompEditarProductos/>} ></Route>

      </Routes>
      </BrowserRouter>
      <CompFooter/>
      
  </div>
  )
}

export default App;
