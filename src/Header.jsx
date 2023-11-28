import React from 'react'
import{Link} from 'react-router-dom'
import './Header.css'


function Header() {
    const adminAuth =localStorage.getItem("admin")
    const userAuth=localStorage.getItem("user")


  return (
    <header>
      <Link to ='/'>home</Link>
      {
        adminAuth ?
        <>
        <Link to ="/add.product">Add product</Link>
        <Link to ="/edit">product</Link>
        </>:""
      }
      {
        userAuth ?
        <>
        <Link to ="/allproduct">All product</Link>
        <Link to ="/cart"> Cart</Link>
        <Link to ="/Profile">Profile</Link>
        </>:""
      }

{
  // {(JSON.parse(adminAuth).name) || (JSON.parse(userAuth).name)}
                userAuth || adminAuth ?
                    <Link to="/" onClick={() => { localStorage.clear() }}>Logout <span id='loggername'>&#40; {adminAuth ? JSON.parse(adminAuth).name : ""}{userAuth ? JSON.parse(userAuth).name : ""} &#41;</span> </Link>
                    :
                    <>
                        <Link to="/userLogin">Login</Link>
                        <Link to="/adminlogin" >Admin Login</Link>
                        <Link to="/AddProduct" >Add Product</Link>
                        <Link to ="/allProducts">All product</Link>
                    </>
            }
    </header>
  )
}

export default Header