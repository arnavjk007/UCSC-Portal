
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Messages from './Pages/Messages';
import Holds from './Pages/Holds';
import Sidebar from './Sidebar';
import Academics from './Pages/Academics';
import Advisors from './Acad-Pages/Advisors';
import Tasks from './Pages/Tasks';
import Committee from './Acad-Pages/Committee';
import Course from './Acad-Pages/Course';
import Degree from './Acad-Pages/Degree';
import Evaluations from './Acad-Pages/Evaluations';
import Grades from './Acad-Pages/Grades';
import Planner from './Acad-Pages/Planner';
import Test from './Acad-Pages/Test';
import Credit from './Acad-Pages/Credit';
import Unofficial from './Acad-Pages/Unofficial';
import Whatif from './Acad-Pages/Whatif';


function App() {
  return (
    <>
    
    <Router>
          <Sidebar />
          <Routes>
          {/*<Route index element={<Login />} /> */}
          <Route path="/home" element={<Home />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/login" element={<Login />} />
          <Route path="/holds" element={<Holds />} />
          <Route path="/academics" element={<Academics />} />
              <Route path="/academics/advisors" element={<Advisors />} />
              <Route path="/academics/committees" element={<Committee />} />
              <Route path="/academics/coursehistory" element={<Course />} />
              <Route path="/academics/degreeprogress" element={<Degree />} />
              <Route path="/academics/evaluations" element={<Evaluations />} />
              <Route path="/academics/grades" element={<Grades />} />
              <Route path="/academics/planner" element={<Planner />} />
              <Route path="/academics/testscores" element={<Test />} />
              <Route path="/academics/creditreport" element={<Credit />} />
              <Route path="/academics/unofficialtranscript" element={<Unofficial />} />
              <Route path="/academics/whatifreport" element={<Whatif />} />

          <Route path="/tasks" element={<Tasks />} />
          </Routes>
        
  </Router>
  </>
  
  );
}

export default App;

