
import './App.css'
import Header from './components/Header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Navbar/Home'
import AboutUs from './components/Navbar/AboutUs'
import Treatments from './components/Navbar/Treatments'
import Destinations from './components/Navbar/Destinations'
import Hospitals from './components/Navbar/Hospitals'
import FAQ from './components/Navbar/FAQ'
import Blog from './components/Navbar/Blog'
import Quote from './components/Navbar/Quote'
import Footer from './components/Footer/Footer'
function App() {

  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<AboutUs />} path='/about' />
        <Route element={<Treatments />} path='/treatment' />
        <Route element={<Destinations />} path='/destination' />
        <Route element={<Hospitals />} path='/hospital' />
        <Route element={<FAQ />} path='/faq' />
        <Route element={<Blog />} path='/blog' />
        <Route element={<Quote />} path='/quote' />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
