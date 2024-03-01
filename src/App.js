
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Messages from './Pages/Messages';
import Holds from './Pages/Holds';
import Sidebar from './Sidebar';

function App() {
  return (
    <>
    
    <Router>
          <Routes>
          {/*<Route index element={<Login />} /> */}
          <Route path="/home" element={<Home />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/login" element={<Login />} />
          <Route path="/holds" element={<Holds />} />
          </Routes>
  </Router>
  </>
  
  );
}

export default App;

