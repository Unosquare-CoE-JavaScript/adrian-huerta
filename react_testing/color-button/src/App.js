import { useState } from 'react';

import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const [disabled, setDisabled] = useState(false);

  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  const handleCheckboxChange = (event) => {
    setDisabled(event.target.checked);
  }

  return (
    <div className="App">
      <button style={{background: disabled ? 'gray' : buttonColor}} onClick={() => setButtonColor(newButtonColor)} disabled={disabled}>Change to {newButtonColor}</button>
      <input id="disable-button-checkbox" type="checkbox" onClick={handleCheckboxChange} />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
