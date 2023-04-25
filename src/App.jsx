import { useState, useEffect } from "react";
import "./App.scss";
import LoadPage from "./components/loadpage/LoadPage";
import MainApp from "./components/MainApp/Main-App";

function App() {
  const [loadStatus, setLoadStatus] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoadStatus(false);
    }, 3500);
  }, []);

  return (
    <>
      <div className="App">
        {loadStatus && <LoadPage />}
        <MainApp />
      </div>
    </>
  );
}

export default App;
