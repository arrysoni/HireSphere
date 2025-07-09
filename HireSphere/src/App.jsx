import { useState } from 'react'
import './App.css'
import ApplicationTracker from './pages/Hiring/ApplicationTracker';
import Form from './pages/Hiring/Form';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ApplicationTracker />
      <Form />
    </div>
  )
}

export default App;
