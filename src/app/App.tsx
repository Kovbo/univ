import React, { useEffect } from "react";
import "./../App.css";
import { AppRoutes } from "./routing/AppRoutes";

function App() {
  useEffect(() => {
    fetch("https://registry.edbo.gov.ua/api/universities/?ut=1&lc=80&exp=json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
