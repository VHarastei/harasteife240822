import { render, screen } from '@testing-library/react';
import { BarChartRow } from '../components/BarChart/BarChartRow';

const options = [
  { name: 'Landing Page', value: 7.4 },
  { name: 'Configurator', value: 0.2 },
  { name: 'Check-out', value: 7.0 },
  { name: 'Deal', value: 3.8 },
];

describe('BarChartRow component', () => {
  it('renders option values', () => {
    const currentOption = { name: 'Landing Page', value: 7.4 };

    render(
      <table>
        <tbody>
          <BarChartRow
            currentOption={currentOption}
            rowIndex={0}
            totalOptionsValue={18.4}
            options={options}
          />
        </tbody>
      </table>
    );

    const optionNameElement = screen.getByText(currentOption.name);
    expect(optionNameElement).toBeInTheDocument();

    const optionValueElement = screen.getByText(currentOption.value);
    expect(optionValueElement).toBeInTheDocument();
  });
});
