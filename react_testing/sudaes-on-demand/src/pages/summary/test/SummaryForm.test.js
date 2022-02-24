import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

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

    userEvent.click(termsConditionCheckbox);
    expect(orderButton).toBeEnabled();

    userEvent.click(termsConditionCheckbox);
    expect(orderButton).toBeDisabled();
  });
});

test('Popover responds to hover', async () => {
  render(<SummaryForm />);

  const nullPopover = screen.queryByText(/no ice cream will actually be delivered/i);
  expect(nullPopover).not.toBeInTheDocument();

  const termsConditionCheckbox = screen.getByText(/terms and conditions/i);
  userEvent.hover(termsConditionCheckbox);

  const popover = screen.getByText(/no ice cream will actually be delivered/i);
  expect(popover).toBeInTheDocument();

  userEvent.unhover(termsConditionCheckbox);
  await waitForElementToBeRemoved(() =>
    screen.queryByText(/no ice cream will actually be delivered/i)
  );
});
