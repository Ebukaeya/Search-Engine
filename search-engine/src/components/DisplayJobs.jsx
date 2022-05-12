import Jobs from "./Jobs";

const DisplayJobs = ({ jobs, search }) => {
  return (
    <>
      <div className="JobsWrapper">
        {search ? (
          <p>
            Search results: <span>{search}</span>
          </p>
        ) : (
          <p>
            Search results: <span> company</span>
          </p>
        )}

        {jobs.data.map((job) => (
          <Jobs key={job._id} job={job} />
        ))}
      </div>
    </>
  );
};

export default DisplayJobs;
