//useEffect,Axios,
import React from 'react';
import { useEffect } from 'react';

import axios from 'axios';
import { useSelector } from 'react-redux';
import ProductComponents from './ProductComponents';
import { useDispatch } from 'react-redux';
import setproducts from '../redux/Actions/ProductAction'
//import setproducts from '../redux/Actions/ProductAction'
//fetching products that we have in our redux store, to get accessof our redux store====we will use useSelector

const ProductListings = () =>{
    const dispatch= useDispatch()
    const products= useSelector((state)=>state)
     const FetchingApi= async()=>{
         const responseApi= await axios.get("https://fakestoreapi.com/products").catch((err)=>{
                  
         })
         dispatch(setproducts(responseApi.data))
     }
     useEffect(()=>{
         FetchingApi()
     },[])
     console.log(products)
  return <div>
      <ProductComponents/>
  </div>;
};

export default ProductListings;
