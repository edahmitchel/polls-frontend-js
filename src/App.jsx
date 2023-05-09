import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' ;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SignIn } from './pages/signin';
import { SignUp } from './pages/signup';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path={'/'} element={<SignIn></SignIn>}></Route>
        <Route path={'/signup'} element={<SignUp></SignUp>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
