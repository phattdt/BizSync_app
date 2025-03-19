import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Dashboard from './dashboard';
const App = () => {
  return (
    <div className="flex">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
    </div>
  );
};

export default App;
