import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import './App.css'
import Home from './Components/Home'
import Login from './Components/Login'
import Register from './Components/Register'
import UserPage from './Components/UserPage'
import About from './Components/About';

function App() {
  

  return (
    <>
      <Router>
       
        
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Login' element={<Login />}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Register' element={<Register/>}/>
          <Route path='/UserPage' element={<UserPage />}/>
        </Routes>
      </Router>
      
    </>
  )
}

export default App
