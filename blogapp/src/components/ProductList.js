import React, { useState, useEffect } from 'react';
import Cards from './Cards';
function ProductList() {
    const [Products,setProducts] = useState([]);
    useEffect(()=>
    {
        fetch('http://localhost:3000/showdata')
        .then(response => response.json())
        .then(data=> setProducts(data))
        .catch(error => console.error('error:', error));},[]);
 
return (
    <div className='row'>
        {
        Products.map(product => (
                <Cards key= {product._id} id={product._id} title={product.title} description={product.description} image={product.image}></Cards>
             ) )}
        </div>
    
);
}
export default ProductList