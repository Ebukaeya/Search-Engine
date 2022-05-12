import Jobs from "./Jobs";

const DisplayJobs = ({ jobs }) => {
  return (
    <>
      <div className="JobsWrapper">
        <p>
          Search results: <span>developer</span>
        </p>

        {jobs.map((job) => {
          <Jobs />;
        })}
      </div>
    </>
  );
};

export default DisplayJobs;
