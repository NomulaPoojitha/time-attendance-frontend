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
  <Menu />
<div class="container mt-4">
  <div class="row">
    <div class="col-12">
    <Routes>
        <Route path='/employee-reports/:id' element={<Employee/>}></Route>
      </Routes>
    </div>
    <div class="col-12">
      <Routes>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </div>
    <div class="col-12">
      <Routes>
        <Route path='/signup' element={<Signup/>}></Route>
      </Routes>
    </div>
    <div class="col-12">
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
