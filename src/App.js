import { BrowserRouter, Routes , Route} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Footer from './Components/FooterComponent';
import About from './Pages/About';
import Contact from './Pages/Contacts';
import Glidebook from './Pages/Glidebook';
import { useState } from 'react'

function App() {
  const [theme, settheme] = useState('light')
  const toggleTheme = () =>{
 if(theme === "light"){
    settheme('dark')
    document.body.style.background = "#212529"
  }else if(theme === "dark"){
    settheme('light')
    document.body.style.background = "#F8F9FA"
  }
  }

  return (
    <>
    <BrowserRouter>
  <Navbar mode={theme} togglemode={toggleTheme}/>
  <Routes>
    <Route path='/home' element={<Home mode={theme}/>}></Route>
    <Route path='/' element={<Home mode={theme}/>}></Route>
    <Route path='/about' element={<About mode={theme}/>}></Route>
    <Route path='/contact' element={<Contact mode={theme}/>}></Route>
    <Route path='/glidebook' element={<Glidebook mode={theme}/>}></Route>
  </Routes>
  <Footer mode={theme}/>
    </BrowserRouter>

  </>
  );
}

export default App;
