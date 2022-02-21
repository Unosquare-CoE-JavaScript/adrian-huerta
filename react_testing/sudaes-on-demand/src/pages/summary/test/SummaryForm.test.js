import { render, screen, fireEvent } from '@testing-library/react';

import SummaryForm from '../SummaryForm';

describe('Validate the terms and conditions checkbox to proceed', () => {
  test('Default state', () => {
    render(<SummaryForm />);
    const termsConditionCheckbox = screen.getByRole('checkbox', {
      name: 'I agree to Terms and Conditions',
    });
    const orderButton = screen.getByRole('button', { name: 'Confirm order' });

    expect(orderButton).toBeDisabled();
    expect(termsConditionCheckbox).not.toBeChecked();
  });

  test('Button is enable when checkbox is checked and if is unchecked again, button is disabled', () => {
    render(<SummaryForm />);
    const termsConditionCheckbox = screen.getByRole('checkbox', {
      name: 'I agree to Terms and Conditions',
    });
    const orderButton = screen.getByRole('button', { name: 'Confirm order' });

    fireEvent.click(termsConditionCheckbox);
    expect(orderButton).toBeEnabled();

    fireEvent.click(termsConditionCheckbox);
    expect(orderButton).toBeDisabled();
  });
});
