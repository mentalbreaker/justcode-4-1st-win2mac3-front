import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Nav from './components/Nav/Nav';
import List from './pages/List/List';
//import Footer from './components/Footer/Footer';
/*import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Main from './pages/Main/Main';
import Detail from './pages/Detail/Detail';
*/
function Router() {
  return (
    <BrowserRouter>
      {/* <Nav /> */}
      <Routes>

        <Route path="/products/:type" element={<List />} />

        {/*<Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/main" element={<Main />} />
        
  <Route path="/detail" element={<Detail />} />*/}
      </Routes>
      {/* <Footer />*/}
    </BrowserRouter>
  );
}

export default Router;
