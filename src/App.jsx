import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './assets/components/Home/navbar';
import Home from './assets/pages/Home.jsx';
import News from './assets/pages/News.jsx';
import About from './assets/pages/About.jsx';
import Partner from './assets/pages/Partner.jsx';
import Gallery from './assets/pages/Gallery.jsx';
import Login from './assets/pages/Login.jsx';

function App() {

  console.log(window.scrollY)

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/restek-unim/' Component={Home}/>
          <Route path='/restek-unim/news' Component={News}/>
          <Route path='/restek-unim/about' Component={About}/>
          <Route path='/restek-unim/partner' Component={Partner}/>
          <Route path='/restek-unim/gallery' Component={Gallery}/>
          <Route path='/restek-unim/login' Component={Login}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
