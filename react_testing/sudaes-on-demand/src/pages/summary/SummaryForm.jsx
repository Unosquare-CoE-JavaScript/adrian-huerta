import React, { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

const SummaryForm = ({ setOrderPhase }) => {
  const [termsConditionCheckbox, setTermsConditionCheckbox] = useState(false);

  const popover = (
    <Popover>
      <Popover.Body>No ice cream will actually be delivered</Popover.Body>
    </Popover>
  );

  const checkboxLabel = (
    <span>
      I agree to
      <OverlayTrigger overlay={popover}>
        <span style={{ color: 'blue' }}> Terms and Conditions</span>
      </OverlayTrigger>
    </span>
  );

  const handleChangeTermsConditions = (event) => {
    setTermsConditionCheckbox(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setOrderPhase('completed');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          checked={termsConditionCheckbox}
          onChange={handleChangeTermsConditions}
          label={checkboxLabel}
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!termsConditionCheckbox}>
        Confirm order
      </Button>
    </Form>
  );
};

export default SummaryForm;
