import { createContext, useState } from "react";

export const Context = createContext();

function ContextProvider({ children }) {
  const [formData, setFormData] = useState({
    companyName: "",
    type: "",
    date: "",
    time: "",
    answer: "",
  });

  const [appliedJobs, setAppliedJobs] = useState([]);

  const [popup, setPopup] = useState(false);

  const [id, setId] = useState("");

  return (
    <Context.Provider
      value={{
        formData,
        setFormData,
        appliedJobs,
        setAppliedJobs,
        popup,
        setPopup,
        id,
        setId,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;
