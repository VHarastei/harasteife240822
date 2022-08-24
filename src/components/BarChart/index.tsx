import React from 'react';
import styles from './BarChart.module.css';
import { BarChartRow } from './BarChartRow';
import { BarChartOption } from './types';

type PropsType = {
  options: BarChartOption[];
};

export const BarChart: React.FC<PropsType> = ({ options }) => {
  const totalOptionsValue = options.reduce((acc, curr) => acc + curr.value, 0);

  return (
    <table className={styles.table}>
      <tbody data-testid="chart-body">
        {options.map((option, index) => (
          <BarChartRow
            key={index} // not the best solution, but we don't have unique id
            currentOption={option}
            rowIndex={index}
            totalOptionsValue={totalOptionsValue}
            options={options}
          />
        ))}
      </tbody>
    </table>
  );
};
