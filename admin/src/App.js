import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ProSidebarProvider } from 'react-pro-sidebar';
import PiyuMakeoverAdmin from './PiyuMakeoverAdmin';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <React.StrictMode>
      <ProSidebarProvider>
        <PiyuMakeoverAdmin />
      </ProSidebarProvider>
      <ToastContainer />
    </React.StrictMode>
  );
}

export default App;

