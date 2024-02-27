import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Detail from './Detail';
import List from './List';
import React from 'react';
import { AppContext } from './context';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  
  const [schools, setSchools] = useState([]);
  useEffect(() => {
    axios.get("https://data.cityofnewyork.us/resource/s3k6-pzi2.json").then(res => {
      console.log(res.data);
      setSchools(res.data)
    })
  }, [])

  return (
    <AppContext.Provider value={{schools, setSchools}}>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/:schoolDbn?" element={<Detail />} />
          <Route path="/" element={<List />} />
        </Routes>
      </BrowserRouter>
    </div>
    </AppContext.Provider>
  );
}

export default App;
