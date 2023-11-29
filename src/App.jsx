import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import Form from "./components/Form";
import Menu from "./menu/Menu";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/navbar",
          element: <Navbar />,
        },
        {
          path: "/form",
          element: <Form />,
        },
        {
          path: "/menu",
          element: <Menu />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
