import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import BackgroundSlider from './components/BackgroundSlider';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Page from './components/Page';

function App() {
  return (
    <Router>
    <div className="App">
      {/* <BackgroundSlider /> */}
    
    <Routes>
      <Route path='/' element={<BackgroundSlider />} />
      <Route path="/gpa-calc" element={<Page />} />
    </Routes>
    </div>
    </Router>
    
  );
}

export default App;
