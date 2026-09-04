import React from 'react';
import {Link} from 'react-router-dom';

const OrderSuccess = () => {
  return (
    <div className='order-success'>
      <div className='success-icon'>
        ✓
      </div>
      <h1>
        Order Placed Successfully!
      </h1>

      <p>
        Thank you for shopping with Urban Closet.
      </p>

      <Link to="/shop" className='continue-shopping'>
      Continue Shopping 
      </Link>
    </div>
  );
};

export default OrderSuccess;
