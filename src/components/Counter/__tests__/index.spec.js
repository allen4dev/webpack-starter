import React from 'react';
import { render, fireEvent } from 'react-testing-library';

import Counter from 'components/Counter';

it('should render with defaults', () => {
  const { container, getByTestId } = render(<Counter />);

  expect(container.firstChild).toMatchSnapshot();

  expect(getByTestId('total')).toHaveTextContent('Count: 0');
});

it('should render with a initial count', () => {
  const { getByTestId } = render(<Counter initialCount={2} />);

  expect(getByTestId('total')).toHaveTextContent('Count: 2');
});

it('total should add 1 to the total after clicking on the increment button', () => {
  const { getByText, getByTestId } = render(<Counter />);

  const total = getByTestId('total');

  expect(total).toHaveTextContent('Count: 0');

  fireEvent.click(getByText(/increment/i));

  expect(total).toHaveTextContent('Count: 1');
});

it('total should subtract 1 to the total after clicking on the decrement button', () => {
  const { getByText, getByTestId } = render(<Counter initialCount={2} />);

  const total = getByTestId('total');

  expect(total).toHaveTextContent('Count: 2');

  fireEvent.click(getByText(/decrement/i));

  expect(total).toHaveTextContent('Count: 1');
});

it('should be true', () => {
  expect(true).toBeTruthy();
});
