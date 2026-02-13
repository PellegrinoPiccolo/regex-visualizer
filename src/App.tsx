import MatchViewer from "./components/MatchViewer";
import RegexInput from "./components/RegexInput";
import TextInput from "./components/TextInput";
import { findMatches } from "./utils/findMatches";
import React from "react";

const FLAG_OPTIONS = [
  {
    key: "g",
    name: "Global",
    description: "Does not stop at the first match; finds all occurrences in the text.",
  },
  {
    key: "i",
    name: "Ignore Case",
    description: "Makes the search case-insensitive.",
  },
  {
    key: "m",
    name: "Multiline",
    description: "Makes ^ and $ match the start/end of each line.",
  },
  {
    key: "s",
    name: "DotAll",
    description: "Allows . to match newline characters (\\n).",
  },
  {
    key: "u",
    name: "Unicode",
    description: "Enables full Unicode character support.",
  },
  {
    key: "v",
    name: "Unicode Sets",
    description: "Enhanced Unicode with set operations in character classes.",
  },
  {
    key: "y",
    name: "Sticky",
    description: "Attempts the match only at the position set by lastIndex.",
  },
  {
    key: "d",
    name: "Indices",
    description: "Generates extra indices for captured groups.",
  },
];

function App() {
  const [pattern, setPattern] = React.useState("");
  const [text, setText] = React.useState("");
  const [selectedFlags, setSelectedFlags] = React.useState<string[]>(["g"]);
  const [matches, setMatches] = React.useState<string[]>([]);

  const flagString = React.useMemo(() => {
    return FLAG_OPTIONS.filter((option) => selectedFlags.includes(option.key))
      .map((option) => option.key)
      .join("");
  }, [selectedFlags]);

  React.useEffect(() => {
    if (pattern && text) {
      const foundMatches = findMatches(text, pattern, flagString);
      setMatches(foundMatches);
    } else {
      setMatches([]);
    }
  }, [pattern, text, flagString]);

  const toggleFlag = (flagKey: string) => {
    setSelectedFlags((prev) =>
      prev.includes(flagKey) ? prev.filter((item) => item !== flagKey) : [...prev, flagKey]
    );
  };

  return (
    <div className="app-shell">
      <div className="page-content mx-auto max-w-7xl px-5 py-10">
        <header className="hero">
          <p className="hero-kicker">Pellegrino Piccolo</p>
          <h1 className="hero-title">Regex Visualizer</h1>
          <p className="hero-subtitle">
            Simply enter your text and regex pattern to see the matches highlighted in real-time. Perfect for learning, debugging, or just having fun with regular expressions!
          </p>
        </header>

        <div className="layout-grid">
          <section className="glass-card card-panel">
            <div className="card-header">
              <p className="section-kicker">Input</p>
              <h2 className="section-title">Input Text</h2>
              <p className="section-subtitle">Type or paste the text to analyze.</p>
            </div>
            <TextInput value={text} onChange={(e) => setText(e.target.value)} />
          </section>

          <section className="glass-card card-panel accent-panel">
            <div className="card-header">
              <p className="section-kicker">Regex</p>
              <h2 className="section-title">Regex Pattern</h2>
              <p className="section-subtitle">Build your expression and choose the flags.</p>
            </div>
            <RegexInput value={pattern} onChange={(e) => setPattern(e.target.value)} />
            <div className="flag-panel">
              <div className="flag-panel-header">
                <div>
                  <p className="section-kicker">Flags</p>
                  <h3 className="section-title text-base">Select flags</h3>
                </div>
                <div className="flag-active mono">
                  <span className="text-xs uppercase tracking-[0.25em] text-slate-400">Active</span>
                  <span className="text-slate-100 text-sm">/{pattern || "pattern"}/{flagString || ""}</span>
                </div>
              </div>
              <div className="flag-toggle-row">
                {FLAG_OPTIONS.map((option) => {
                  const isActive = selectedFlags.includes(option.key);
                  return (
                    <button
                      key={option.key}
                      type="button"
                      className={`flag-toggle ${isActive ? "is-active" : ""}`}
                      onClick={() => toggleFlag(option.key)}
                      aria-pressed={isActive}
                    >
                      <span className="flag-key mono">{option.key}</span>
                      <span className="flag-label">{option.name}</span>
                    </button>
                  );
                })}
              </div>
              <div className="flag-legend">
                {FLAG_OPTIONS.map((option) => (
                  selectedFlags.includes(option.key) && (
                    <div key={`legend-${option.key}`} className="flag-legend-item">
                      <span className="mono">{option.key}</span>
                      <span className="text-slate-200/90">{option.description}</span>
                    </div>
                  )
                ))}
              </div>
            </div>
          </section>

          <section className="glass-card card-panel output-panel">
            <div className="card-header">
              <p className="section-kicker">Output</p>
              <h2 className="section-title">Matches</h2>
              <p className="section-subtitle">Matched results appear here.</p>
            </div>
            <MatchViewer text={text} matches={matches} />
          </section>
        </div>
      </div>
    </div>
  )
}

export default App
