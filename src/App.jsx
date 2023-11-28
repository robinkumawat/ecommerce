import React from 'react'
import AddProduct from './AddProduct'
import Header from './Header'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Userlogin from './Userlogin'
import AllProduct from './AllProduct'
import Home from './Home'

function App() {
  return (
    <>
   <BrowserRouter>
   <Header/>
    <Routes>
    <Route path='/AddProduct' element={<AddProduct/>}></Route>
    <Route path='/userLogin' element={<Userlogin/>}></Route>
    <Route path='/allProducts' element={<AllProduct/>}></Route>
    <Route path='/' element={<Home/>}/>
    </Routes>
   </BrowserRouter>
  
    </>
  )
}

export default App