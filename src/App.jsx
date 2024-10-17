import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './Components/Home'
import Login from './Components/Login'
import Register from './Components/Register'
import UserPage from './Components/UserPage'
import CookieConsent from './Components/CookieConsent'
import AppliedComp from './Components/AppliedComp';
import Offers from './Components/Offers';
import EditProfile from './Components/EditProfile';

function App() {
  

  return (
    <>
      <Router>
       <CookieConsent />      
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Login' element={<Login />}/>
          <Route path='/AppliedComp' element={<AppliedComp/>}/>
          <Route path='/Register' element={<Register/>}/>
          <Route path='/UserPage' element={<UserPage />}/>
          <Route path='/Offers' element={<Offers />}/>
          <Route path='/EditProfile' element={<EditProfile />}/>
        </Routes>
      </Router>
      
    </>
  )
}

export default App
