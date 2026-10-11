import { useState } from "react"

function App() {
  return (
    <div>
      <TextExpander />
      <TextExpander />
      <TextExpander />
    </div>
  );
}

function TextExpander() {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayText = isExpanded ? "Hello world" : "Test";
  return (
    <>{displayText}</>
  )
}

export default App;
