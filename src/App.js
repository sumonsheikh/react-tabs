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

  const {id,title,company,date,duties} = jobs[value];
  return (
    <section className="section">
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>
      <div className="job-center">
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p>{date}</p>
        {duties.map((duty,index) =>{
          return(
            <div key={index}>
              <p>{duty}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default App;
