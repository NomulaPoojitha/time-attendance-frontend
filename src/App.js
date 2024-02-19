import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Employee from './components/Employee';
import HrPage from './components/HrPage';
import Menu from './components/Menu';
import {Route , Routes} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <div class="container-fluid p-5 bg-primary text-white text-center">
  <h1>My First Bootstrap Page</h1>
  <p>Resize this responsive page to see the effect!</p> 
</div>
  <Menu />
<div class="container mt-5">
  <div class="row">
    <div class="col-sm-4">
    <Routes>
        <Route path='/employee-reports' element={<Employee/>}></Route>
       
      </Routes>
    </div>
    <div class="col-sm-4">
      <Routes>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </div>
    <div class="col-sm-4">
    <Routes>
        <Route path='/hr-reports' element={<HrPage />}></Route>
       
      </Routes>
    </div>
  </div>
</div>
    </div>
  );
}

export default App;
