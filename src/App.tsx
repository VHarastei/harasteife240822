import React, { useCallback, useEffect, useMemo, useState } from 'react';
import './App.css';
import randomFloatFromInterval from './common/randomFloatFromInterval';
import { BarChart } from './components/BarChart';

const defaultInputOptions = [
  { name: 'Landing Page', time: 7.4 },
  { name: 'Configurator', time: 0.2 },
  { name: 'Check-out', time: 7.0 },
  { name: 'Deal', time: 3.8 },
];

function App() {
  const [inputOptions, setInputOptions] = useState(defaultInputOptions);

  const formattedOptions = useMemo(
    () => inputOptions.map(({ name, time }) => ({ name, value: time })),
    [inputOptions]
  );

  const handleRegenerateOptions = useCallback(() => {
    const newInputOptions = inputOptions.map(({ name }) => {
      const randomNumber = randomFloatFromInterval(0, 20, 1);

      return { name, time: randomNumber };
    });

    setInputOptions(newInputOptions);
  }, [inputOptions]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleRegenerateOptions();
    }, 31800);
    return () => clearTimeout(timeout);
  }, [handleRegenerateOptions]);

  return (
    <>
      <header className="header">
        <h1 className="headerTitle">Spent time (seconds)</h1>
      </header>
      <main className="main">
        <BarChart options={formattedOptions} />
        <button onClick={handleRegenerateOptions}>Regenerate</button>
      </main>
    </>
  );
}

export default App;
