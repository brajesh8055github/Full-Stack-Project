import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from './store/auth';
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
// import { AuthProvider } from './store/auth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <AuthProvider>
  <AuthProvider>
    <React.StrictMode>
      <App />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        bodyClassName="toastBody"

      />
    </React.StrictMode>
  </AuthProvider>
);

