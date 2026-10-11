import { useState } from "react"

function App() {
  return (
    <div>
      <TextExpander />

    </div>
  );
}

function TextExpander() {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <>Todo</>
  )
}

export default App;
