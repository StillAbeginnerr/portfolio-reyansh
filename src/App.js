import {React} from 'react';
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import NaviBar from './Components/Nav_Bar';
import AcademicCredentials from './Components/Academic_credentials';
import AcademicWorkExperience from './Components/Academic_Work_Experience';
import Personaldata from './Components/Personal_Data';
import Summary from './Components/Professional_Summary';
import Home from './Components/Home';


function App() {
return (
<>
<NaviBar></NaviBar>
<Router>
<Routes>
<Route path='/' element={<Home></Home>}></Route>
<Route path='/Academic_Credentials' element={<AcademicCredentials></AcademicCredentials>}></Route>
<Route path='/Academic_Work_Experience' element={<AcademicWorkExperience></AcademicWorkExperience>}></Route>
<Route path='/Personal_Data' element={<Personaldata></Personaldata>}></Route>
<Route path='/Summary' element={<Summary></Summary>}></Route>
</Routes></Router>


</>
  );
}

export default App;
