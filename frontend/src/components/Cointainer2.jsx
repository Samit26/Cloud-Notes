import Items from "./Items";
import "../components/container2.css";
import { useContext } from "react";
import { DataContext } from "../Context/store";
import EmptyItem from "./EmptyItem";
import FetchingNotes from "./FetchingNotes";
import ErrorFetchingNotes from "./ErrorFetchingNotes";
import { useNavigate } from "react-router-dom";

const Container2 = () => {
  const { notes, loading } = useContext(DataContext);
  const [notes2] = notes;
  console.log(notes2);

  const navigate = useNavigate();
  let ItemsToShow;
  const handleCreateNoteBtn = () => {
    navigate("/createNote");
  };

  if (loading === "true") {
    ItemsToShow = <FetchingNotes />;
  } else if (loading === "error") {
    ItemsToShow = <ErrorFetchingNotes />;
  } else if (notes2.length >= 1) {
    ItemsToShow = notes2.map((note, index) => (
      <Items key={index} note={note} />
    ));
  } else if (notes2.length === 0) {
    ItemsToShow = <EmptyItem handleCreateNoteBtn={handleCreateNoteBtn} />;
  }

  return (
    <>
      <div className="container text-center py-3">
        <h2>CLOUD NOTES</h2>
      </div>

      <div className="container text-center my-2">
        <div className="row">
          <div className="col ">
            <button
              type="button"
              className="btn btn-primary col button1"
              onClick={handleCreateNoteBtn}
            >
              Create New Note
            </button>
          </div>

          <div className="dropdown col">
            <button
              className="btn btn-secondary dropdown-toggle button2"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ visibility: "hidden" }}
            >
              Dropdown button
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="container p-3"
        style={{
          backgroundColor: "#A6B1E1",
          borderRadius: "0.5rem",
          maxWidth: "70rem",
        }}
      >
        {ItemsToShow}
      </div>
    </>
  );
};
export default Container2;
