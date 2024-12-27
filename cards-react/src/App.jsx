import { Route, Routes } from 'react-router-dom'
import Header from './pages/Client/Header'
import Home from './pages/Client/Home'


function App() {

  return (
    <>
    <Header/>
    <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} /> */}

      </Routes>
    </>
  )
}

export default App
