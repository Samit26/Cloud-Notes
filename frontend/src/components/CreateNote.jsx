import { useContext, useRef } from "react";
import { DataContext } from "../Context/store";
import { useNavigate } from "react-router-dom";

const CreateNote = () => {
  const title1 = useRef(null);
  const description1 = useRef(null);
  const navigate = useNavigate();
  const tag1 = useRef(null);
  const { createNotes } = useContext(DataContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const createNoteData = [
      {
        title: title1.current.value,
        description: description1.current.value,
        tag: tag1.current.value,
      },
    ];
    createNotes(createNoteData);
    navigate("/");
  };
  return (
    <>
      <div className="container text-center py-3">
        <h2>CLOUD NOTES</h2>
      </div>

      <div
        className="container text-center my-2"
        style={{ visibility: "hidden" }}
      >
        <div className="row">
          <div className="col ">
            <button type="button" className="btn btn-primary col button1">
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
        <div>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label  fs-4">
                Title
              </label>
              <input
                style={{ height: "3rem" }}
                type="input"
                name="title"
                ref={title1}
                className="form-control"
                aria-describedby="emailHelp"
              />
              <div className="form-text">
                Enter a title. Example `Class Time`
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label fs-4">
                Description
              </label>
              <input
                style={{ height: "3rem" }}
                type="input"
                className="form-control "
                aria-describedby="emailHelp"
                ref={description1}
              />
              <div className="form-text">
                Enter a description. Example `I wanted to bunk the class to
                complete my react project`
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label fs-4">
                Tag
              </label>
              <input
                style={{ height: "3rem" }}
                type="input"
                className="form-control"
                aria-describedby="emailHelp"
                ref={tag1}
              />
              <div className="form-text">
                Enter a tag. Example `#class`,`#project`
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Create
            </button>
            <button
              type="button"
              className="btn btn-danger ms-4"
              onClick={() => navigate("/")}
            >
              Close
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateNote;
