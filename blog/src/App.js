
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import MoneyCounter from './component/MoneyCounter'

function  App(){
  return (
    <Routes>
      <Route path="/detail" element={ <MoneyCounter></MoneyCounter> } />
      <Route path="/about" element={ <div>about</div> } />
    </Routes>
  )
}

export default App 