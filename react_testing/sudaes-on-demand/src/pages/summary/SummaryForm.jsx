import React, { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SummaryForm = () => {
  const [termsConditionCheckbox, setTermsConditionCheckbox] = useState(false);

  const checkboxLabel = (
    <span>
      I agree to <span style={{ color: 'blue' }}> Terms and Conditions</span>
    </span>
  );

  const handleChangeTermsConditions = (event) => {
    setTermsConditionCheckbox(event.target.checked);
  };

  return (
    <Form>
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
