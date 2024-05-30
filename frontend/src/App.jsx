import { createBrowserRouter, RouterProvider } from "react-router-dom";


import 'bootstrap/dist/css/bootstrap.min.css';
import { Layout } from "./layout/Layout";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "Sign-Up",
        element: <Signup />
      },
      {
        path: "Login",
        element: <Login />
      }
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}


export default App;