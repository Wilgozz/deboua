import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import Login from './pages/login';
import Register from './pages/register';
import Emotions from './pages/emotions';
import ResetPassword from './pages/reset_password';
import PasswordRecovery from './pages/password_recovery';
import RecoveryEmailSent from './pages/recovery_email_sent';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "cadastro",
    element: <Register />,
  },
  {
    path: "emocoes",
    element: <Emotions />,
  },
  {
    path: "recuperacaoDeSenha",
    element: <ResetPassword />,
  },
  {
    path: "recuperarSenha",
    element: <PasswordRecovery />,
  },
  {
    path: "recuperacaoDeEmailEnviado",
    element: <RecoveryEmailSent />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
