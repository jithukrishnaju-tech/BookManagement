import ReactDOM from "react-dom/client";
import Home from "./components/Home";
import "./styles.css";
import Body from "./components/Body";
import AddBook from "./components/AddBook";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
const AppLayout = () => {
  return (
    <div>
      <Home />
      <Outlet />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/addbook",
        element: <AddBook />,
      },
    ],
  },
]);
root.render(<RouterProvider router={appRouter} />);
