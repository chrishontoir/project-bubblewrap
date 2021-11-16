import { render } from '@testing-library/react';
import { ignoreMarkup } from '../../helpers/TestUtils';

import Title from '../Title';

test('should render an empty string if children is undefined', () => {
  const { getByLabelText } = render(<Title></Title>);
  expect(getByLabelText('title')).toBeInTheDocument();
});

test('should render the text provided as children', () => {
  const { getByText } = render(<Title>Test title message</Title>);
  expect(getByText(ignoreMarkup('Test title message'))).toBeInTheDocument();
});

test('should render the text provided with the primary class when the primary prop is provided', () => {
  const { container } = render(<Title primary>Test title message</Title>);
  expect(container.getElementsByClassName('primary').length).toBe(2);
});

test('should render the text provided with the secondary class when the secondary prop is provided', () => {
  const { container } = render(<Title secondary>Test title message</Title>);
  expect(container.getElementsByClassName('secondary').length).toBe(2);
});

test('should render the text provided with the error class when the error prop is provided', () => {
  const { container } = render(<Title error>Test title message</Title>);
  expect(container.getElementsByClassName('error').length).toBe(2);
});
