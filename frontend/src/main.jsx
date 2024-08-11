import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Container from "./components/Container.jsx";
import Signup from "./components/Signup.jsx";
import StoreProvider from "./Context/store.jsx";
import Container2 from "./components/Cointainer2.jsx";
import CreateNote from "./components/CreateNote.jsx";

const router = createBrowserRouter([
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Container />,
        children: [
          {
            path: "/",
            element: <Container2 />,
          },
          { path: "/createNote", element: <CreateNote /> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StoreProvider>
    <RouterProvider router={router} />
  </StoreProvider>
);
