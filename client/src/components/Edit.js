import "./../style/Edit.css";
import { useContext, useState } from "react";
import { Context } from "./Context";
import axios from "axios";

function Edit() {
  const { setPopup, id } = useContext(Context);

  const [selected, setSelected] = useState("");

  const handleChange = (e) => {
    console.log(e);
    setSelected(e.target.previousElementSibling.innerHTML);
  };

  const handleClick = (e) => {
    e.preventDefault();

    if (selected) {
      axios.patch(`/api/v1/jobs/${id.trim()}`, {
        answer: selected,
      });
    }

    setPopup(false);
  };

  return (
    <div className="edit-container">
      <form className="edit-form" action="#">
        <div className="edit-radio-container">
          <label htmlFor="rej">Rejected</label>
          <input
            type="radio"
            name="update"
            id="rej"
            value="Rejected"
            onChange={handleChange}
          />
        </div>
        <div className="edit-radio-container">
          <label htmlFor="wai">Waiting...</label>
          <input
            type="radio"
            name="update"
            id="wai"
            value="Waiting..."
            onChange={handleChange}
          />
        </div>

        <div className="edit-radio-container">
          <label htmlFor="acc">Accepted</label>
          <input
            type="radio"
            name="update"
            id="acc"
            value="Accepted"
            onChange={handleChange}
          />
        </div>

        <button onClick={handleClick} className="btn-general btn-edit">
          Update
        </button>
      </form>
    </div>
  );
}

export default Edit;
