import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Legal from './pages/Legal';
import { ScrollToTop } from './components/ui/ScrollToTop';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aviso-legal" element={<Legal />} />
      </Routes>
    </Router>
  )
}

export default App
