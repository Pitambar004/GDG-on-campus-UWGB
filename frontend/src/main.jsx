import { useEffect, useState } from "react";

function App() {
  const [health, setHealth] = useState(null);

  useEffect(() => {
    fetch("/api/health")
      .then(res => res.json())
      .then(data => setHealth(data.status));
  }, []);

  return <div>API status: {health}</div>;
}

export default App;
