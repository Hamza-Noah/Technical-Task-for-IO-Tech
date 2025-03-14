import { ToastContainer } from "react-toastify";
import ItemList from "./components/ItemsList";
import "./App.css";

function App() {
  return (
    <>
      <ItemList />
      <ToastContainer />
    </>
  );
}

export default App;
