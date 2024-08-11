import { useContext, useEffect, useState } from "react";
import "../components/signup.css";
import { DataContext } from "../Context/store";
import { useNavigate } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import { Toaster, toast } from "react-hot-toast";

const Signup = () => {
  const [isActive, setIsActive] = useState(false);
  const { authGetter, auth } = useContext(DataContext);
  const [inputs, setInputs] = useState({});
  const [inputsLogin, setInputsLogin] = useState({});
  // const [loading, setLoading] = useState(false);
  const [loadingValue, setLoadingValue] = useState("0%");

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const navigate = useNavigate();

  useEffect(() => {
    // console.log("Auth value:", auth);
    if (auth !== "") {
      navigate("/");
    }
  }, [auth, navigate]);
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoadingValue("75%");
    fetch("https://cloud-notes-server.vercel.app/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    })
      .then((response) => response.json())
      .then((data) => {
        const token = data.authtoken;
        authGetter(token);
        setLoadingValue("100%");
        toast.success("Signup Successful!");
      })
      .catch(() => {
        toast.error(`Error signing ... Try again with different email.`);
        setLoadingValue("100%");
      });
  };

  const handleSubmitLogin = (event) => {
    event.preventDefault();

    setLoadingValue("25%");
    setTimeout(() => setLoadingValue("75%"), 200);
    fetch("https://cloud-notes-server.vercel.app/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputsLogin),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (!data || !data.authtoken) {
          throw new Error("Invalid response data");
        }
        const token = data.authtoken;
        authGetter(token);
        setLoadingValue("100%");
        toast.success("Login successful!");
      })
      .catch(() => {
        toast.error("Login Failed. Try again.");
      });
  };

  const handleChangeLogin = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setInputsLogin((values) => ({ ...values, [name]: value }));
  };

  return (
    <>
      {" "}
      <div>
        <Toaster />
      </div>
      <div className="progressbar position-fixed" style={{ width: "100%" }}>
        <ProgressBar value={loadingValue} />
      </div>
      <div className="body-1">
        <section className={`wrapper ${isActive ? "active" : ""}`}>
          <div className="form signup">
            <header onClick={() => setIsActive(false)}>Signup </header>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Full name"
                value={inputs.name || ""}
                name="name"
                onChange={handleChange}
                required
              />
              <input
                type="text"
                placeholder="Email address"
                value={inputs.email || ""}
                name="email"
                onChange={handleChange}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={inputs.password || ""}
                name="password"
                onChange={handleChange}
                required
              />
              <div className="checkbox">
                <input type="checkbox" id="signupCheck" />
                <label htmlFor="signupCheck">
                  I accept all terms & conditions
                </label>
              </div>
              <input type="submit" value="Signup" />
            </form>
          </div>
          <div className="form login">
            <header onClick={() => setIsActive(true)}>Login</header>
            <form onSubmit={handleSubmitLogin}>
              <input
                type="text"
                placeholder="Email address"
                name="email"
                value={inputsLogin.email || ""}
                onChange={handleChangeLogin}
                required
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={inputsLogin.password || ""}
                onChange={handleChangeLogin}
                required
              />
              <a href="#">Forgot password?</a>
              <input type="submit" value="Login" />
            </form>
            {/* {loading && <ProgressBar value={loadingValue} />} */}
          </div>
        </section>
      </div>
    </>
  );
};

export default Signup;
