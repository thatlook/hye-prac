import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Example1 from './pages/Example1'
import Example2 from './pages/Example2'
import Home from './pages/Home'
import AppBar from './components/AppBar'

function App() {
  return (
    <Router>
      <AppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/example-1" element={<Example1 />} />
          <Route path="/example-2" element={<Example2 />} />
        </Routes>
    </Router>
  );
}

export default App;
