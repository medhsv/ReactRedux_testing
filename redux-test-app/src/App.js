import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Counter from './Counter';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>React Redux Counter</h1>
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
