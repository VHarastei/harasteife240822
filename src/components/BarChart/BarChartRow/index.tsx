import React from 'react';
import { BarChartOption } from '../types';
import styles from './BarChartRow.module.css';

type PropsType = {
  rowIndex: number;
  totalOptionsValue: number;
  currentOption: BarChartOption;
  options: BarChartOption[];
};

export const BarChartRow: React.FC<PropsType> = ({
  rowIndex,
  totalOptionsValue,
  currentOption,
  options,
}) => {
  return (
    <tr>
      <th className={styles.tableRowHead} scope="row">
        {currentOption.name}
      </th>
      {options.map((columnOption, columnIndex) => {
        const isCurrentCell = rowIndex === columnIndex;

        return (
          <td
            key={columnIndex} // not the best solution, but we don't have unique id
            className={isCurrentCell ? styles.activeTableRowData : styles.tableRowData}
            style={{
              width: isCurrentCell ? `${(100 * columnOption.value) / totalOptionsValue}%` : 'auto',
            }}
          >
            <span>{isCurrentCell && currentOption.value}</span>
          </td>
        );
      })}
    </tr>
  );
};
