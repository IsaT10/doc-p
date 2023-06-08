import logo from "./logo.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Routes/Routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto ">
      <RouterProvider router={router} />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

export default App;
