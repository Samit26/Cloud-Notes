import { createContext, useEffect, useReducer, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export const DataContext = createContext({
  notes: [],
  auth: [],
  setAuth: () => {},
  authGetter: () => {},
  createNotes: () => {},
  deleteNotes: () => {},
  loading: "",
  fetchNotesFunction: () => {},
});

const dataReducer = (state, action) => {
  switch (action.type) {
    case "SET_NOTES":
      return {
        ...state,
        notes: [action.payload],
      };

    case "DELETE_NOTES":
      if (state.notes.length >= 1) {
        return {
          ...state,
          notes: state.notes.filter((note) => note.id !== action.id),
        };
      } else {
        return { ...state, notes: [] };
      }
    case "CREATE_NOTE":
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };

    default:
      return state;
  }
};

// eslint-disable-next-line react/prop-types
const StoreProvider = ({ children }) => {
  const initialState = {
    notes: [
      // {
      //   _id: "661a09b1264b1262e4ad332d",
      //   user: "6619108aff8e6e1c5b9edc43",
      //   title: "My First Note",
      //   description: "My first discription",
      //   tag: "Happy",
      //   date: "2024-04-13T04:27:29.718Z",
      //   __v: 0,
      // },
    ],
  };
  const [auth, setAuth] = useState("");
  const [state, dispatch] = useReducer(dataReducer, initialState);
  const [loading, setLoading] = useState("false");
  const [fetchNotes, setFetchNotes] = useState(false);

  useEffect(() => {
    // if (auth !== "") {
    // }
    if ((auth !== "" && state.notes.length === 0) || fetchNotes) {
      setLoading("true");
      fetch("https://cloud-notes-server.vercel.app/fetchnotes", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": `${auth}`,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          dispatch({
            type: "SET_NOTES",
            payload: data,
          });

          setFetchNotes(false);
          setLoading("false");
        })

        .catch((error) => {
          toast.error(
            "There has been a problem with your fetch operation:",
            error
          );
          setLoading("error");
          setFetchNotes(false);
        });
    }
  }, [auth, state.notes.length, fetchNotes]);

  const fetchNotesFunction = () => {
    setFetchNotes(true);
  };

  const createNotes = (data) => {
    const [data1] = data;
    console.log("createNotes is called", data1);
    setLoading("true");
    setFetchNotes(true);
    fetch("https://cloud-notes-server.vercel.app/createnotes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": `${auth}`,
      },
      body: JSON.stringify(data1),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error creating new note");
        }
        res.json();
      })
      .then((data) => {
        console.log(data);
        setLoading("false");
        setFetchNotes(false);
      })
      .catch((e) => {
        toast.error(`${e}`);
        setLoading("false");
        setFetchNotes(false);
      });
    // dispatch({
    //   title: "CREATE_NOTE",
    //   payload: data1,
    // });
  };

  const deleteNotes = (id) => {
    setLoading("true");
    setFetchNotes(true);
    fetch(`https://cloud-notes-server.vercel.app/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": `${auth}`,
      },
    })
      .then(() => {
        toast.success("Note Deleted !");
        setLoading("false");
        setFetchNotes(false);
      })
      .catch((e) => {
        toast.error("error deleting the note", e);
        setLoading("false");
        setFetchNotes(false);
      });

    dispatch({
      type: "DELETE_NOTES",
      id: id,
    });
  };

  const authGetter = async (token) => {
    await setAuth(token);
  };

  return (
    <DataContext.Provider
      value={{
        notes: state.notes,
        auth,
        createNotes,
        deleteNotes,
        authGetter,
        setAuth,
        loading,
        fetchNotesFunction,
      }}
    >
      <Toaster />
      {children}
    </DataContext.Provider>
  );
};

export default StoreProvider;
