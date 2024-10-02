import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [catFact, setCatFact] = useState("");
  const getFact = () => {
    axios.get("https://catfact.ninja/fact").then((response) => {
      setCatFact(response.data.fact);
    });
  };

  useEffect(() => {
    getFact();
  }, []);

  return (
    <>
      <div className="fact-button">
        <button onClick={getFact}>Generate cat fact</button>
        <p>{catFact}</p>
      </div>
    </>
  );
}

export default App;
