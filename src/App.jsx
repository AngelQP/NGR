import { Login } from './pages/Login'

import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ProtectedRouter } from './ProtectedRouter'
import { AuthProvider } from './context/AuthContext'

function App() {

  return (
    <>
    <AuthProvider>

      <BrowserRouter>
        <main className='container mx-auto px-10'>
          
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/login' element={<Login />} />

            <Route element={<ProtectedRouter />}>
              {/* Pages despues de realizar la validación */}
            </Route>

          </Routes>
        </main>
        
        
      </BrowserRouter>
    </AuthProvider>
    </>
  )
}

export default App
