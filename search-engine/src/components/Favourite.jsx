import DisplayJobs from "./DisplayJobs";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    favJobs: state.favouriteJobs.jobs,
  };
};

const Favourite = ({ favJobs }) => {
  return (
    <>
      <div className="mycontainer">
        <div className="companyDivWrapper">
          <span>
            Jobs for{" "}
            <h3 style={{ display: "inline-block" }}>My favourite Jobs</h3>
          </span>
          <hr></hr>

          {favJobs && <DisplayJobs jobs={{ data: favJobs }} />}
        </div>
      </div>
    </>
  );
};

export default connect(mapStateToProps)(Favourite);
