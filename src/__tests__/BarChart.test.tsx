import { render, screen } from '@testing-library/react';
import { BarChart } from '../components/BarChart';

const options = [
  { name: 'Landing Page', value: 7.4 },
  { name: 'Configurator', value: 0.2 },
  { name: 'Check-out', value: 7.0 },
  { name: 'Deal', value: 3.8 },
];

describe('BarChart component', () => {
  it('renders 4 childNodes by default', () => {
    render(<BarChart options={options} />);

    const optionNameElement = screen.getByTestId('chart-body');
    expect(optionNameElement).toBeInTheDocument();

    expect(optionNameElement.childNodes.length).toBe(4);
  });
});
