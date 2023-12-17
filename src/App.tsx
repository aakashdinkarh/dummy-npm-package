
import * as React from 'react';

interface IApp {
  name: string
}

function App({ name }: IApp) {
  return (
      <h1>
        Hello {name}
      </h1>
  );
}

export default App;
