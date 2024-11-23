import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Token from './Pages/Token';
import Register from './Pages/Register';
import Error from './Pages/Error';
import Footer from './Components/Layouts/Footer';
import Header from './Components/Layouts/Header';
import Login from './Pages/Login';
import About from './Pages/About';
import ContactUs from './Pages/Contact';
import Privacy from './Pages/PrivacyPolicy'
import ConnectWallet from './Pages/Wallet';
import FAQs from './Pages/FQA';
import CareerPage from './Pages/Career';
import BuyPage from './Pages/Buy';
// rounting area 
function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
          <Route path="/login" element={<Login />} />
          <Route path="/token" element={<Token />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/connect" element={<ConnectWallet />} />
          <Route path="/faq" element={<FAQs />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/buy" element={<BuyPage />} />
        
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
