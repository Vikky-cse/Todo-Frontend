
import './App.css';
import Login from './components/Login';
import TodoList from './components/TodoList';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
// components
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './components/SignUp';
import StartPage from './components/StartPage';




function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<StartPage />}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Signup/>}></Route>
        <Route path="/home" element={<TodoList />}></Route>
       
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
