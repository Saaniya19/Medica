import { Routes, Route } from 'react-router-dom';
import { Home } from './Home.js';
import { AddPatient } from './AddPatient.js';
import { Prescription } from './Prescription.js';
import { VerifyPrescription } from './VerifyPrescription.js';
import { ViewPatient } from './ViewPatient.js';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='add-patient' element={<AddPatient />} ></Route>
        <Route path='prescription' element={<Prescription />} ></Route>
        <Route path='verify-prescription' element={<VerifyPrescription />} ></Route>
        <Route path='view-patient' element={<ViewPatient />} ></Route>
      </Routes>
    </>
  );
};

export default App;