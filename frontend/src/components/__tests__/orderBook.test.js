
import { render, screen, cleanup } from '@testing-library/react';
import OrderBook from '../orderBook';

test('should render orderbook component ', () => {
  render(<OrderBook />);
  const orderbookelement = screen.getByTestId('orderBook');
  expect(orderbookelement).toBeInTheDocument();
}) 

