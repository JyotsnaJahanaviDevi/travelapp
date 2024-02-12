import React, { useState } from 'react';
import Checklist from './Checklist';
import './App.css'; // Import the CSS file for styling

function App() {
  const [personalChecklist, setPersonalChecklist] = useState([]);
  const [sharedChecklist, setSharedChecklist] = useState([]);

  const handleDeletePersonal = () => {
    setPersonalChecklist([]);
  };

  const handleDeleteShared = () => {
    setSharedChecklist([]);
  };

  return (
    <div className="App">
      <Checklist
        title="Personal Checklist"
        items={personalChecklist}
        onDelete={handleDeletePersonal}
      />
      <Checklist
        title="Shared Checklist"
        items={sharedChecklist}
        onDelete={handleDeleteShared}
      />
    </div>
  );
}

export default App;
