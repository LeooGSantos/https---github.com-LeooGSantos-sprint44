import './App.css'
import {Outlet} from 'react-router-dom'
import Menu from './components/Menu.jsx'
import Rodape from './components/Rodape.jsx'

function App(){

  return(
    <>
      <Menu/>
      <Outlet/>
      <Rodape/>
    </>
  )
}
export default App

