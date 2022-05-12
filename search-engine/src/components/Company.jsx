import { useParams } from "react-router-dom";
import DisplayJobs from "./DisplayJobs";
import { useEffect, useState } from "react";

const Company = () => {
  const params = useParams();


  const [companyJobs, setCompanyJobs] = useState(null);
  const [loadingJobs, setLoadingJobs] = useState(false);

  const fetchJobs = async()=>{
    try {
        setLoadingJobs(true)
        const response = await fetch(
          "https://strive-jobs-api.herokuapp.com/jobs?company=" + params.company
        );
        if (response.ok) {
          let jobs = await response.json();
          setCompanyJobs(jobs);
          setLoadingJobs(false)
        } else {
          alert("something is wrong");
        }
      } catch (error) {
        console.log(error);
      }
  }

  useEffect( () => {
   fetchJobs()
  }, []);
  return (
    <>
      <div className="mycontainer">
        <div className="companyDivWrapper">
          <span>
            Jobs for{" "}
            <h3 style={{ display: "inline-block" }}>{params.company}</h3>
          </span>
          <hr></hr>

          {companyJobs && <DisplayJobs jobs={companyJobs}/>}
        </div>
      </div>
    </>
  );
};

export default Company;
