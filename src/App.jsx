import React, { useState } from 'react';
import Sizing from './Sizing'; // Sizing bileşenini import et

function App() {
  const [size, setSize] = useState(''); // Boyut state
  const [tickness, setTickness] = useState(''); // Hamur kalınlığı state

  // Boyut seçimi için handler
  const handleRadioChange = (e) => {
    setSize(e.target.value); // Seçilen boyutu state'e kaydet
  };

  // Hamur kalınlığı seçimi için handler
  const optionSelection = (e) => {
    setTickness(e.target.value); // Seçilen hamur kalınlığını state'e kaydet
  };

  return (
    <div>
      <Sizing
        size={size}
        tickness={tickness}
        handleRadioChange={handleRadioChange}
        optionSelection={optionSelection}
      />
      <p>Seçilen Boyut: {size}</p>
      <p>Seçilen Hamur Kalınlığı: {tickness}</p>
    </div>
  );
}

export default App;