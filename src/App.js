import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import Home from './pages/Home';
import Slam from './pages/Slam';
import Text from './pages/Text';
import Error from "./pages/Error";
/*import { motion } from "framer-motion";*/

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/slam" element={<Slam/>}/>
        <Route path="/text" element={<Text />}/>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
