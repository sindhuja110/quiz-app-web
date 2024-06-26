import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { store } from "./redux/features/Store";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const queryClient = new QueryClient();

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
     
          <Provider store={store}>
            <App />
          </Provider>
          <ToastContainer />
    
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
