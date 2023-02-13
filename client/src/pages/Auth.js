import "./../style/Auth.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Auth() {
  const [authData, setAuthData] = useState({
    username: "",
    password: "",
  });

  const [wrongCred, setWrongCred] = useState(false);

  const { username, password } = authData;

  const navigate = useNavigate();

  const handleAuth = (e) => {
    const { name, value } = e.target;

    setAuthData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = () => {
    if (username === "user" && password === "123") {
      navigate("/jobs");
    } else {
      setWrongCred(true);
    }
  };

  setTimeout(() => {
    setWrongCred(false);
  }, 5000);

  return (
    <div className="auth-container">
      {wrongCred ? (
        <p className="failed-login">Wrong username or password</p>
      ) : (
        ""
      )}
      <input
        onChange={handleAuth}
        type="text"
        placeholder="username"
        name="username"
      />
      <input
        onChange={handleAuth}
        type="password"
        placeholder="password"
        name="password"
      />

      <button onClick={handleLogin} className="btn-general">
        Login
      </button>
    </div>
  );
}

export default Auth;
