
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
import FinancialAid from './Pages/FinancialAid';
import Personal from './Pages/Personal';
import Resources from './Pages/Resources';
import LoginS from './Sub-Pages/LoginS';
import Passphrase from './Pages/Passphrase';
import Forms from './Pages/Forms';
import StudentCenter from './Pages/StudentCenter';
import Charges from './Acc-Pages/Charges';
import Summary from './Acc-Pages/Summary';
import Activity from './Acc-Pages/Activity';
import Payments from './Acc-Pages/Payments';
import DirectDeposit from './Acc-Pages/DirectDeposit';
import BillingStatements from './Acc-Pages/BillingStatements';


function App() {
  return (
    
    <div className='original_container' style={{display:'flex', flexDirection:'row', overflowY:'hidden'}}>
    <Router>
          <Sidebar />
          <div className='wrapper'>
          <Routes>
            {/*<Route index element={<Login />} /> */}
            <Route index element={<Home />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/login" element={<Login />} />
            <Route path="/holds" element={<Holds />} />
            <Route path="/tasks" element={<Tasks />} />

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

            <Route path="/account" element={<Account />} />
              <Route path='/account/charges-due' element={<Charges />} />

              <Route path='/account/direct-deposit' element={<DirectDeposit />} />
              <Route path='/account/billing-statements' element={<BillingStatements />} />
              <Route path='/account/summary' element={<Summary />} />
              <Route path='/account/activity' element={<Activity />} />
              <Route path='/account/payments' element={<Payments />} />

            <Route path="/enrollment" element={<Enrollment />} />
            <Route path="/financial-aid" element={<FinancialAid />} />
            <Route path="/personal-info" element={<Personal />} />
            <Route path="/resources" element={<Resources />} />
              <Route path="/resources/login-services" element={<LoginS />} />
            <Route path="/passphrase" element={<Passphrase />} />
            <Route path="/eforms" element={<Forms />} />
            <Route path="/student-center" element={<StudentCenter />} />
          </Routes>
          </div>
  </Router>
  </div>
  
  );
}

export default App;

