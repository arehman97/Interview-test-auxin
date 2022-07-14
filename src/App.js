import { ToastContainer } from "react-toastify";
import RouteViews from "./RouteViews";
import "react-toastify/dist/ReactToastify.css";
import './App.css';

function App() {
  return (
    <div className="App">
      <RouteViews />
      <ToastContainer />
    </div>
  );
}

export default App;
