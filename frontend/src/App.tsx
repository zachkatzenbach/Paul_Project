import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FirstMission from './pages/FirstMission';
import Login from './pages/Login';
import PreConversion from './pages/PreConversion';
import SecondMission from './pages/SecondMission';
import ThirdMission from './pages/ThirdMission';
import JourneyToRome from './pages/JourneyToRome';

function App() {
  return (
    <>
      <div className="background">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
              <Route path="/pre-conversion" element={<PreConversion />} />
              <Route path="/first-mission" element={<FirstMission />} />
              <Route path="/second-mission" element={<SecondMission />} />
              <Route path="/third-mission" element={<ThirdMission />} />
              <Route path="/journey-to-rome" element={<JourneyToRome />} />
              <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
