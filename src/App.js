import './App.scss';
import 'swiper/swiper.min.css'
import './assets/boxicons-2.0.7/css/boxicons.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header' 
import Footer from './components/footer/Footer' 
import Router from './config/Router'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='*' element={
            <>
              <Header/>
              <Router/>
              <Footer/>
            </>
          }/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
