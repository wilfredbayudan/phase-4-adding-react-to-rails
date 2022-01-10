import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("/movies")
      .then((r) => r.json())
      .then(console.log);
  }, []);

  return <h1>Hello from React!</h1>;
}

export default App;