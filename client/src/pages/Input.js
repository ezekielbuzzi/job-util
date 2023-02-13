import "./../style/Input.css";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import { Context } from "../components/Context";

function Input() {
  const { formData, setFormData } = useContext(Context);

  const { companyName, type, date, answer } = formData;

  const [jobAdded, setJobAdded] = useState(false);
  const [notFilled, setNotFilled] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (companyName && type && date && answer) {
      const response = await axios.post("/api/v1/jobs", formData);
      if (response) {
        setJobAdded(true);
      }
    } else {
      setNotFilled(true);
    }

    setFormData((prev) => ({ ...prev, companyName: "" }));
  };

  setTimeout(() => {
    setJobAdded(false);
    setNotFilled(false);
  }, 5000);

  return (
    <div className="form-container">
      <h2 className="input-heading">Add your applied Jobs here</h2>
      {jobAdded ? <p className="error-message"> Job added </p> : ""}
      {notFilled ? (
        <p className="error-message">Please fill in all the fields</p>
      ) : (
        ""
      )}
      <form className="form" action="">
        <input
          className="company-name"
          type="text"
          name="companyName"
          placeholder="Put in the company name"
          onChange={handleChange}
          value={formData.companyName}
        />
        <div className="type-container">
          <div className="radio-container">
            <label htmlFor="onsite">Onsite</label>
            <input
              type="radio"
              name="type"
              id="onsite"
              onChange={handleChange}
              value="onsite"
            />
          </div>
          <div className="radio-container">
            <label htmlFor="hybrid">Hybrid</label>
            <input
              type="radio"
              name="type"
              id="hybrid"
              onChange={handleChange}
              value="hybrid"
            />
          </div>
          <div className="radio-container">
            <label htmlFor="home-office">Home-office</label>
            <input
              type="radio"
              name="type"
              id="home-office"
              onChange={handleChange}
              value="home-office"
            />
          </div>
        </div>

        <input
          className="when"
          type="date"
          name="date"
          onChange={handleChange}
          value={formData.date}
        />

        <input
          className="when"
          type="time"
          name="time"
          onChange={handleChange}
          value={formData.time}
        />

        <div className="answer-container">
          <div className="radio-container">
            <label htmlFor="rejected">Rejected</label>
            <input
              type="radio"
              name="answer"
              id="rejected"
              onChange={handleChange}
              value="Rejected"
            />
          </div>
          <div className="radio-container">
            <label htmlFor="waiting">Waiting</label>
            <input
              type="radio"
              name="answer"
              id="waiting"
              onChange={handleChange}
              value="Waiting..."
            />
          </div>
          <div className="radio-container">
            <label htmlFor="Accepted">Accepted</label>
            <input
              type="radio"
              name="answer"
              id="Accepted"
              onChange={handleChange}
              value="Accepted"
            />
          </div>
        </div>

        <button className="btn-general btn-input" onClick={handleSubmit}>
          Add Job
        </button>
      </form>
      <button
        className="btn-general to-applied-jobs"
        onClick={() => navigate("/jobs")}
      >
        To Applied jobs
      </button>
    </div>
  );
}

export default Input;
