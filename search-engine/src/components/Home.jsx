import "../styles/allstyles.css";
import { useState } from "react";
import DisplayJobs from "./DisplayJobs";

const Home = () => {
  const [search, setSearch] = useState("");
  const [loadingJobs, setLoadingJobs] = useState(false);
  const [jobs, setJobs] = useState(null);

  const handleSubmit = async () => {
    setLoadingJobs(true);
    try {
      const response = await fetch(
        `https://strive-jobs-api.herokuapp.com/jobs?search=${search}&limit=10`
      );
      if (response.ok) {
        const jobs = await response.json();
        setJobs(jobs);
        setLoadingJobs(false);
      } else {
        alert("fetch failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="mycontainer">
        <div className="searchWrapper">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="106"
              height="106"
              fill="currentColor"
              class="bi bi-award"
              viewBox="0 0 16 16"
            >
              <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z" />
              <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
            </svg>
          </div>
          <div>
            <input
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              placeholder="Search Jobs e.g developer"
              autoFocus
            />
          </div>

          <button onClick={handleSubmit}>Search</button>
        </div>

        {jobs && <DisplayJobs jobs={jobs} search={search} />}
      </div>
    </>
  );
};

export default Home;
