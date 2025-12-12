import React from 'react';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/order' element={<Order />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      <Footer />
      <FloatingButton />
      <CookieBanner />
    </Router>
  );
}

export default App;
