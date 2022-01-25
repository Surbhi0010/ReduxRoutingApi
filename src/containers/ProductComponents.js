import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
//useSelector, DiStructuring

const ProductComponents = () => {
    const products = useSelector((state)=>state.allProducts.products)
    //const{id,category, title,}= products[0]
    const renderList=products.map((products)=>{
        const {id, title, price, category, description, image}= products
        return( <div>
        <Link to={`/product/${id}`}>
            <div>
                <div key={id}>
                    <div>
                        <div>{title}</div>
                        <div>{price}</div>
                        <div>{category}</div>
                        <div>{description}</div>
                        <img src={image} alt={title}/>

                    </div>
                </div>
            </div>
            </Link>
            
        </div>)
    })
  return (<>
     {renderList}
  </>);
};

export default ProductComponents;
