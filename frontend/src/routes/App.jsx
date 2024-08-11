import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { DataContext } from "../Context/store";
import { useContext, useEffect } from "react";

function App() {
  const { auth } = useContext(DataContext);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Auth value:", auth);
    if (auth === "") {
      navigate("/signup");
    }
  }, [auth, navigate]);

  if (auth !== "") {
    return (
      <>
        <Header />
        <Outlet />
      </>
    );
  }

  return null; // Render nothing while redirecting
}

export default App;
