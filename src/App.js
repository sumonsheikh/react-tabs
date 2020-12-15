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
  };

  useEffect(() => {
    fetchJobs();

  }, []);

  if(loading){
    return(
      <section className="loading section">
        <h2>Loading...</h2>
      </section>
    );
  }

  return (
    <div className="App">
      {jobs.map((job) =>{
        return (
          <div>
            <h2>{job.company}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default App;
