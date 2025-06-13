import React from 'react';
import MirrorMindApp from './components/mirrormind';
import MirrorMindAgent from './components/mirrormind-agent';

function App() {
  return (
      <div style={{ background: 'midnightblue', color: 'white', height: '100vh' }}>
      <h1>MirrorMind – Client Render Test</h1>
      <p>If you see this, React works fine client-side.</p>
      {/* <MirrorMindAgent /> */}
      <MirrorMindApp />
    </div>
  );
}

export default App;
