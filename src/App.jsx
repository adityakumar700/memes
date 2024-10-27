import { Routes, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Home from './pages/Home'
import Edit from './pages/Edit'
function App() {


  return (
    <>
      <div className='app'>
        <h1>memes generator</h1>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='edit' element={<Edit />} />
        </Routes>
      </div>
    </>
  )
}

export default App

