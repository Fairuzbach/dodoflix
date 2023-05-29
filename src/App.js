import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FooterComponent from './components/FooterComponent';
import './App.css';
import NavbarComponent from './components/NavbarComponent';
import Home from './pages/home';
import Subscribe from './pages/subscribe'
import Pricing from './pages/pricing'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/subscribe' element={<Subscribe />} />
        <Route path='/pricing' element={<Pricing />} />
      </Routes>
    </Router>
  );
}

export default App;
