import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Signup } from './pages/Signup.js';


function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path='/' element={<Home />} ></Route> */}
        <Route path='signup' element={<Signup />} ></Route>
      </Routes>
    </Router>
  );
};

export default App;