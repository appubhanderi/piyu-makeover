import React, { useEffect } from 'react';
import AOS from 'aos';
import './App.css';
import './Gallery.css';
import './SelectServices.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import 'react-toastify/dist/ReactToastify.css';
import PiyuMakeover from './PiyuMakeover';
import { ToastContainer } from 'react-toastify';



function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <React.StrictMode>
      <PiyuMakeover />
      <ToastContainer />
    </React.StrictMode>
  );
}
export default App;