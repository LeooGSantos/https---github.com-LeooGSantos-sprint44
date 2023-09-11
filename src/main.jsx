import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Bike from './routes/Bike/index.jsx';
import FazerSeguro from './routes/FazerSeguro/index.jsx';
import Principal from './routes/Principal/index.jsx';
import PlanosSeguro from './routes/PlanosSeguro/index.jsx';
import RMs from './routes/RMs/index.jsx';


const router = createBrowserRouter(
[
      {path : "/" , element : <Principal/>},
      {path: "/Bike" , element: <Bike/>},
      {path: "/FazerSeguro" , element: <FazerSeguro/>},
      {path: "/FazerSeguro" , element: <FazerSeguro/>},
      {path: "/PlanosSeguro" , element: <PlanosSeguro/>},
      {path: "/RMs" , element: <RMs/>}
      
    ]
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)






