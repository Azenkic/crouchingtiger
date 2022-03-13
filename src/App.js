import React, { useState } from 'react';
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';
import StepThree from './components/StepThree';
import StepFour from './components/StepFour';

import './App.css';

function App() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState({
    ime:"",
    prezime:"",
    email:"",
    grad:"",
    zanimanje:"",
    godine:""
  });

  return (
    <div className="App">
    {page === 1 && <StepOne page={page} setPage={setPage} data={data} setData={setData} />}
    {page === 2 && <StepTwo page={page} setPage={setPage} data={data} setData={setData} />}
    {page === 3 && <StepThree page={page} setPage={setPage} data={data} />}
    {page === 4 && <StepFour />}

    </div>
  );
}

export default App;
