import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './AllProduct.css'

function AllProduct() {
  const [allproducts, setAllproduct] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    getProducts();
  }, [])


  const getProducts = async () => {
    let response = await axios.get("http://localhost:5000/product/")
    setAllproduct(response.data);

  }

  const HandleEdit = (id) =>{
    navigate (`/edit/${id}`)
  }

  const HandleDelete =  async(id) =>{
    let result = await axios.delete(`http://localhost:5000/del/${id}`)
    if(result.data.acknowledged){
      alert(`product with ID : ${id} has been deleted`)
      navigate("/allProducts")
    }
  }
  return (
    <div className='Allproduct'>
      <h1>All Product</h1>
      <div className='product-cont'>
        {
          allproducts.map((poduct) => {
            return (
              <div className='product' key={poduct._id}>
                <div className='img-cont'>
                  <img src={`http://localhost:5000/upload/product/add/${poduct.photo}`} alt=" not loaded" />
                </div>
                <div className="items">
                  <h2 className='label'>Product:</h2>
                  <h4>{poduct.name}</h4>
                </div>
                <div className="items">
                  <h2 className='label'>Price:</h2>
                  <h4>{poduct.price}</h4>
                </div>
                <div className="items">
                  <h2 className='label'>Category:</h2>
                  <h4>{poduct.category}</h4>
                </div> <div className="items">
                  <h2 className='label'>Company:</h2>
                  <h4>{poduct.company}</h4>
                </div>
                <div className="actions">
                  <button className='edit btns'onClick={()=>HandleEdit(poduct._id)}>Edit</button>
                  <button className='delete btns'onClick={()=>HandleDelete(poduct._id)}>Delete</button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default AllProduct