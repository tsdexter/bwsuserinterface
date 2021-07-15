import React, { useState, useEffect } from 'react';

// This is a wrapper for google.script.run that lets us use promises.
import server from '../utils/server';
import AppWrapper from './components/AppWrapper';

const { serverFunctions } = server;

const App = () => {
  const [cell, setCell] = useState(null);
  const [newValue, setNewValue] = useState();
  const getValue = async () => {
    const value = await serverFunctions.getCellValue('CALCULATIONS', cell);
    setNewValue(value);
  };
  const setValue = () => {
    serverFunctions.setCellValue('CALCULATIONS', cell, newValue);
  };
  return (
    <div>
      <AppWrapper />
    </div>
  );
};

const Demo = () => (
  <div className="border-blue-500 border-8 bg-red-50">
    <h1>Hello world 1</h1>
    Cell: <input value={cell} onChange={e => setCell(e.target.value)} />
    <button onClick={getValue}>Get Value</button>
    <hr />
    Value:{' '}
    <input value={newValue} onChange={e => setNewValue(e.target.value)} />
    <button onClick={setValue}>Set Value</button>
  </div>
);

export default App;
