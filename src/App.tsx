import MatchViewer from "./components/MatchViewer";
import RegexInput from "./components/RegexInput";
import TextInput from "./components/TextInput";
import { findMatches } from "./utils/findMatches";
import React from "react";

function App() {

  const [pattern, setPattern] = React.useState("");
  const [text, setText] = React.useState("");
  const [matches, setMatches] = React.useState<string[]>([]);

  React.useEffect(() => {
    if (pattern && text) {
      const foundMatches = findMatches(text, pattern);
      console.log('=================MATCHES===================');
      console.log(foundMatches);
      console.log('====================================');
      setMatches(foundMatches);
    } else {
      setMatches([]);
    }
  }, [pattern, text]);

  return (
    <div className="p-20">
      <h1 className="text-4xl font-bold mb-10">Regex Visualizer</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Input Text</h2>
          <TextInput value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Regex Pattern</h2>
          <RegexInput value={pattern} onChange={(e) => setPattern(e.target.value)} />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Matches</h2>
          <MatchViewer text={text} matches={matches} />
        </div>
      </div>
    </div>
  )
}

export default App
