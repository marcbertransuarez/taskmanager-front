import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import ToDoList from './pages/ToDoList';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/tasks" element={<ToDoList />} />
    </Routes>
    </div>
  );
}

export default App;
