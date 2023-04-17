import './App.css';
import Login from './login'
import Dashboard from './Dashboard';
import { HashRouter, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' name='Login Page' element={<Login />} />
          <Route path='/dashboard' name='Dashboard' element={<Dashboard />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
