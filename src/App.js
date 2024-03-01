
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import Home from './Pages/Home';
import Messages from './Pages/Messages';
import Login from './Pages/Login';

function App() {
  return (
    <>
    
    <Router>
      

          <Routes>
          {/*<Route index element={<Login />} /> */}
          <Route path="/home" element={<Home />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/login" element={<Login />} />
          
          </Routes>
  </Router>
  </>
  
  );
}

export default App;

