import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './Addproduct.css'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'


const AddProduct = () => {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")
  const [company, setCompany] = useState("")
  const [photo, setPhoto] = useState("")
  const Navigate = useNavigate()


  const RegisterProduct = async (e) => {
    e.preventDefault()
    let result = await axios.post("http://localhost:5000/product/add", { name, price, category, company, photo }, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    result = result.data
    if (result.name) {
      alert("Product has been added to data base")
      Navigate("/AllProduct")
    }
  }

  return (
    <>
      <div className='add-product'>
        <h1> Product ot database</h1>
        <form action="" onSubmit={RegisterProduct}>
          <input type="text" placeholder='Name of product' value={name} onChange={(e) => setName(e.target.value)} autoFocus />
          <input type="number" placeholder='price of product' value={price} onChange={(e) => setPrice(e.target.value)} />
          <input type="text" placeholder='Category of product' value={category} onChange={(e) => setCategory(e.target.value)} />
          <input type="text" placeholder='Company of product' value={company} onChange={(e) => setCompany(e.target.value)} />
          <input type="file" placeholder='photo' onChange={(e) => setPhoto(e.target.files[0])} />

          <button>Add Product</button>
        </form>
      </div>
    </>
  )
}

export default AddProduct
