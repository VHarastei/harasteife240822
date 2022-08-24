import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from '../App';

describe('App component', () => {
  it('renders title', () => {
    render(<App />);

    const titleElement = screen.getByText(/Spent time/i);
    expect(titleElement).toBeInTheDocument();
  });
  it('regenerates option values', async () => {
    render(<App />);

    const optionValueElementBefore = screen.getByText(7.4);
    expect(optionValueElementBefore).toBeInTheDocument();

    const btn = screen.getByText(/regenerate/i);
    expect(btn).toBeInTheDocument();
    fireEvent.click(btn);

    const optionValueElementAfter = screen.queryByText(7.4);

    await waitFor(() => expect(optionValueElementAfter).toBeNull());
  });
});
