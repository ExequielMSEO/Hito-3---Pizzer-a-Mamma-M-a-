import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
// import Cart from './components/Cart';
//import Register from './components/Register';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Home />
      {/* <Cart /> */}
      {/* <RegisterPage /> */}
      {/* <LoginPage /> */}
      <Footer />
    </div>
  );
}

export default App;