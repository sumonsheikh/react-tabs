import React, {useState, useEffect} from 'react';
import './App.css';

const url ='https://course-api.netlify.app/api/react-tabs-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs]       = useState([]);
  const [value, setValue]     = useState(0);

  const fetchJobs = async () =>{
    const respons = await fetch(url);
    const newJobs = await respons.json();
    setJobs(newJobs);
    setLoading(false);
  }
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
