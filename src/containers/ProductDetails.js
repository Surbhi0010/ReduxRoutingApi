import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { selectedproducts } from '../redux/Actions/ProductAction';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const ProductDetails = () => {
    
    const product = useSelector((state)=> state.product)
    
    const {productId}= useParams()
    const dispatch= useDispatch()
    console.log(product)
    const fetchProductDetail =async()=>{
      const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err)=>{
              
      })
     dispatch(selectedproducts(response))
    }
    useEffect(()=>{
        if(productId && productId!=="")fetchProductDetail()
    },[productId])
    
         return(
         <div>
            <h2>Product Detals</h2>
         </div>
         )
    
  
};

export default ProductDetails;
