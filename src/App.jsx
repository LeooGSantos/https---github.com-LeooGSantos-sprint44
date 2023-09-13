import './App.css';
import { Outlet } from 'react-router-dom';
import Menu from './components/Menu.jsx';
import Rodape from './components/Rodape.jsx';
import Home from './components/Home.jsx';
import { useMediaQuery } from 'react-responsive';

function App() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 768px)'
  });
  const isTabletOrMobile = useMediaQuery({
    query: '(max-device-width: 767px)'
  });

  return (
    <>
      {isDesktopOrLaptop && <Home />} 
      <Menu />
      <Outlet />
      <Rodape />
    </>
  );
}

export default App;
