import React from 'react';
import {useNavigate} from 'react-router-dom';
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom';
const Cards = ({id,title,price,image})=>{
  const navigate=useNavigate();
  const handleBuyNow=()=>{
    navigate(`/checkout/${id}`);
  };




  return (
    <div>
        <div className="card m-5" style={{ width: '18rem' }}>
           <img src={image} className="card-img-top" alt='image' />
             <div className="card-body">
          <h5 className="card-title">{title}</h5>
  <p className="card-text"></p>
  <a href="#" className="btn btn-primary" style={{ backgroundColor: '#ff6807 !important'}} onClick={handleBuyNow}>Explore</a>
</div>
</div>
    </div>
  )
}


export default Cards