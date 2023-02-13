import "./../style/Stats.css";
import { useContext } from "react";
import { Context } from "./Context";

function Stats() {
  const { appliedJobs } = useContext(Context);

  const rejected = appliedJobs.filter((el) => el.answer === "Rejected");
  const waiting = appliedJobs.filter((el) => el.answer === "Waiting...");
  const accepted = appliedJobs.filter((el) => el.answer === "Accepted");

  return (
    <div className="stats-container">
      <p>Number of applied jobs: {appliedJobs.length} </p>
      <p>Rejected: {rejected.length} </p>
      <p>Waiting: {waiting.length}</p>
      <p>Accepted: {accepted.length}</p>
    </div>
  );
}

export default Stats;
