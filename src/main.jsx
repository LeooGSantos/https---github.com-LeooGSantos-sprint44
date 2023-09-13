import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Bike from './routes/Bike/index.jsx';
import FazerSeguro from './routes/FazerSeguro/index.jsx';
import Principal from './routes/Principal/index.jsx';
import PlanosSeguro from './routes/PlanosSeguro/index.jsx';
import RMs from './routes/RMs/index.jsx';
import { useMediaQuery } from 'react-responsive';

const AppWrapper = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 768px)'
  });
  const isTabletOrMobile = useMediaQuery({
    query: '(max-device-width: 767px)'
  });

  return (
    <App isDesktopOrLaptop={isDesktopOrLaptop} isTabletOrMobile={isTabletOrMobile} />
  );
};

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppWrapper />,
      children: [
        { path: "/", element: <Principal /> },
        { path: "/Bike", element: <Bike /> },
        { path: "/FazerSeguro", element: <FazerSeguro /> },
        { path: "/FazerSeguro", element: <FazerSeguro /> },
        { path: "/PlanosSeguro", element: <PlanosSeguro /> },
        { path: "/RMs", element: <RMs /> }
      ]
    }
  ]
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
