import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' ;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SignIn } from './pages/signin';
import { SignUp } from './pages/signup';
import { MoreInfo } from './pages/signup2';
import { Dashboard } from './pages/Dashboard';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path={'/'} element={<SignIn></SignIn>}></Route>
        <Route path={'/signup'} element={<SignUp></SignUp>}></Route>
        <Route path={'/registerDetails'} element={<MoreInfo></MoreInfo>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
