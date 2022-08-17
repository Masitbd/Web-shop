import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import TheLayout from './views/pages/TheLayout';

function App() {
  //const [state, setState] = useState()
  return (
    <BrowserRouter>
      <TheLayout />
    </BrowserRouter>
  );
}

export default App;
