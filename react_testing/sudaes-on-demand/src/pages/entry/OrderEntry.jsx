import React from 'react';

import Options from './Options';
import { useOrderDetails } from '../../context/OrderDetails';

import Button from 'react-bootstrap/Button';

const OrderEntry = ({ setOrderPhase }) => {
  const [orderDetails] = useOrderDetails();

  return (
    <div>
      <h1>Design Your Sundae!</h1>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
      <h2>Grand total: {orderDetails.totals.grandTotal}</h2>
      <Button onClick={() => setOrderPhase('review')}>Order Sundae!</Button>
    </div>
  );
};

export default OrderEntry;
