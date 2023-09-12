import './App.css'
import {Outlet} from 'react-router-dom'
import Menu from './components/Menu.jsx'
import Rodape from './components/Rodape.jsx'
import Home from './components/Home.jsx'

function App(){

  return(
    <>
      <Home/>
      <Menu/>
      <Outlet/>
      <Rodape/>
    </>
  )
}
export default App

