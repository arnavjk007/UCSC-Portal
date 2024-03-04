
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
import Account from './Pages/Account';
import Enrollment from './Pages/Enrollment';


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
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/academics" element={<Academics />} />
                <Route path="advisors" element={<Advisors />} />
                <Route path="committees" element={<Committee />} />
                <Route path="coursehistory" element={<Course />} />
                <Route path="degreeprogress" element={<Degree />} />
                <Route path="evaluations" element={<Evaluations />} />
                <Route path="grades" element={<Grades />} />
                <Route path="planner" element={<Planner />} />
                <Route path="testscores" element={<Test />} />
                <Route path="creditreport" element={<Credit />} />
                <Route path="unofficialtranscript" element={<Unofficial />} />
                <Route path="whatifreport" element={<Whatif />} />
            <Route path="/account" element={<Account />} />
            <Route path="/enrollment" element={<Enrollment/>} />
          
          </Routes>
        
  </Router>
  </>
  
  );
}

export default App;

