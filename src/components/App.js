import { useEffect } from 'react';

import callToApi from '../services/callToApi';

function App() {
  useEffect(() => {
    callToApi().then((response) => {
      console.log(response);
    });
  }, []);

  return <div className="App">Hola mundo</div>;
}

export default App;
