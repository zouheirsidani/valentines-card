// App.js
import React, { useState } from 'react';
import './App.css';
import SelectionScreen from './components/SelectionScreen';
import CelebrationScreen from './components/CelebrationScreen';
import RejectionScreen from './components/RejectionScreen';

function App() {
  const [isValentine, setIsValentine] = useState(null);

  const handleSelection = (valentine) => {
    setIsValentine(valentine);
  };

  const handleRejectionConfirm = (confirmed) => {
    if (confirmed) {
      // Handle rejection confirmation if needed
    } else {
      setIsValentine(null);
    }
  };

  return (
    <div className="App">
      {isValentine === null && <SelectionScreen onSelect={handleSelection} />}
      {isValentine === true && <CelebrationScreen />}
      {isValentine === false && <RejectionScreen onConfirm={handleRejectionConfirm} />}
    </div>
  );
}

export default App;
