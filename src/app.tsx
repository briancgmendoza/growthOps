import * as React from 'react';

const App = () => {
    const [counter, setCounter] = React.useState(0);
  return (
    <div>
        <h1>{counter}</h1>
        <button onClick={() => setCounter(counter => counter + 1)}>Add</button>
        <button onClick={() => setCounter(counter => counter - 1)}>Subtract</button>
    </div>
  )
}

export default App