import React, { useState, useEffect } from 'react';

import ScoopOption from './ScoopOption';
import ToppingOptions from './ToppingOptions';
import axios from 'axios';

import Row from 'react-bootstrap/Row';

const Options = ({ optionType }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((response) => setItems(response.data))
      .catch((error) => {});
  }, [optionType]);

  const ItemComponent = optionType === 'scoops' ? ScoopOption : ToppingOptions;

  const optionItems = items.map((item) => (
    <ItemComponent key={item.name} name={item.name} imagePath={item.imagePath} />
  ));

  return <Row>{optionItems}</Row>;
};

export default Options;
