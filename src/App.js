import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/partials/Header/Header';
import NotFound from './components/partials/NotFound/NotFound';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Routes>
       <Route path="/" element={<Home></Home>}></Route>
       <Route path="/home" element={<Home></Home>}></Route>




       <Route path="*" element={<NotFound></NotFound>}></Route>
     </Routes>

    </div>
  );
}

export default App;
