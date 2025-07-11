import { Routes, Route } from 'react-router-dom';
import CandidateDashboard from './pages/CandidateDashboard';
import CandidateInterview from './pages/CandidateInterview';
import CandidateSettings from './pages/CandidateSettings';

function App() {
  return (
    <Routes>
      <Route path="/candidate/dashboard" element={<CandidateDashboard />} />
      <Route path="/candidate/interviews" element={<CandidateInterview />} />
      <Route path="/candidate/settings" element={<CandidateSettings />} />
    </Routes>
  );
}

export default App;
