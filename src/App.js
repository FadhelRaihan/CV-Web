import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home'
import Resume from './pages/resume/resume'

function App() {
  return (
    <div>
        <Router>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/resume' element={<Resume/>} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
