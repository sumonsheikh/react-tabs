import React, {useState, useEffect} from 'react';
import './App.css';
import {FaAngleDoubleRight} from 'react-icons/fa';

const url ='https://course-api.netlify.app/api/react-tabs-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs]       = useState([]);
  const [value, setValue]     = useState(1);

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

  const {id,title,company,dates,duties} = jobs[value];

  return (
    <section className="section">
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>
      <div className="job-center">
        <div className="btn-container">
          {jobs.map((item, index) =>{
            return(
              <button onClick={() => setValue(index)}>{item.company}</button>
            );
          })}
        </div>
        <div className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty,index) =>{
            return(
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="duty-icon"></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}

export default App;
