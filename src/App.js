import React, { useState } from 'react';
import Form from './Form';

function App() {
  const [values, setValues] = useState(null);

  return (
    <div>
      <Form onSubmit={setValues} />
      {values && (
        <>
          <div style={{ marginTop: 20 }}>Submitted Values:</div>
          <div>
            {Object.entries(values).map(([key, value]) => (
              <div>
                {key}: {value}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
