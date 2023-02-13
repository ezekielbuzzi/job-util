import "./../style/Home.css";
import ScrollToBottom from "react-scroll-to-bottom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { Context } from "../components/Context";
import Edit from "./../components/Edit";
import Stats from "../components/Stats";

function Home() {
  const [keyWord, setKeyWord] = useState("");
  const { popup, setPopup, setId, appliedJobs, setAppliedJobs } =
    useContext(Context);
  const [showStats, setShowStats] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      if (keyWord) {
        const response2 = await axios.get(
          `/api/v1/jobs/specific/?search=${keyWord}`
        );
        setAppliedJobs(response2.data.jobs);
      } else {
        const response = await axios.get("/api/v1/jobs");

        setAppliedJobs(response.data.jobs);
      }
    };

    getData();
  }, [keyWord]);

  const handleClick = () => {
    navigate("/input");
  };

  const hanldeEdit = (e) => {
    setId(e.target.previousElementSibling.innerHTML);

    setPopup(true);
  };

  const handleSearch = (e) => {
    setKeyWord(e.target.value);
  };

  const handleStats = () => {
    setShowStats((prev) => !prev);
  };

  return (
    <div className={`home-container ${popup ? "blurry" : ""} `}>
      <header className="header">
        <h1 className="primary-heading">Applied Job List</h1>
        <button className="btn-general" onClick={handleClick}>
          Add Job
        </button>
        <input
          className="search"
          type="text"
          placeholder="Search"
          onChange={handleSearch}
        />
      </header>

      <div className="main-row">
        <p>Company name</p>
        <p>Type</p>
        <p>Date</p>
        <p>Time</p>
        <p>Answer</p>
      </div>

      <ScrollToBottom className="scroll">
        {appliedJobs.map((job, i) => {
          return (
            <div key={i} className="row">
              <p> {job.companyName} </p>
              <p> {job.type} </p>
              <p> {job.date} </p>
              <p> {job.time} </p>
              <div className="answer-edit">
                <p> {job.answer} </p>
                <span className="hidden-id"> {job._id} </span>
                <button onClick={hanldeEdit} className="edit-btn">
                  Edit
                </button>
              </div>
            </div>
          );
        })}
      </ScrollToBottom>

      {popup ? <Edit /> : ""}

      <button onClick={handleStats} className="btn-general  btn-stats">
        {`${showStats ? "Close stats" : "Stats"}  `}
      </button>

      {showStats ? <Stats /> : ""}
    </div>
  );
}

export default Home;
