import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BirthdayGreeting from './components/BirthdayGreeting';
import Surprise from './components/Surprise';
import Message from './components/Message';
import Message2 from './components/Message2';
import Message3 from './components/Message3'; // ✅ Import Message3

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BirthdayGreeting />} />
        <Route path="/surprise" element={<Surprise />} />
        <Route path="/message" element={<Message />} />
        <Route path="/message2" element={<Message2 />} />
        <Route path="/message3" element={<Message3 />} /> {/* ✅ Add new route */}
      </Routes>
    </Router>
  );
}

export default App;
