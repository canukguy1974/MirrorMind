import React from 'react';
import MirrorMindApp from './components/mirrormind';
import MirrorMindAgent from './components/mirrormind-agent';

function App() {
  return (
      <div className="App">
      <MirrorMindAgent />
      <MirrorMindApp />
    </div>
  );
}

export default App;
