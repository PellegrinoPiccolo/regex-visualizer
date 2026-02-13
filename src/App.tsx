import MatchViewer from "./components/MatchViewer";
import RegexInput from "./components/RegexInput";
import TextInput from "./components/TextInput";
import { findMatches } from "./utils/findMatches";
import React from "react";

function App() {

  const [pattern, setPattern] = React.useState("");
  const [text, setText] = React.useState("");
  const [flag, setFlag] = React.useState("g");
  const [matches, setMatches] = React.useState<string[]>([]);

  React.useEffect(() => {
    if (pattern && text) {
      const foundMatches = findMatches(text, pattern, flag);
      setMatches(foundMatches);
    } else {
      setMatches([]);
    }
  }, [pattern, text, flag]);

  return (
    <div className="app-shell">
      <div className="page-content mx-auto max-w-6xl px-6 py-16">
        <header className="mb-12 flex flex-col gap-4">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/80">Pellegrino Piccolo</p>
          <h1 className="text-4xl md:text-5xl font-semibold text-slate-100">
            Regex Visualizer
          </h1>
          <p className="max-w-2xl text-slate-300/90">
            Simply enter your text and regex pattern to see the matches highlighted in real-time. Perfect for learning, debugging, or just having fun with regular expressions!
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <section className="glass-card rounded-2xl p-6 flex flex-col gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Input</p>
              <h2 className="text-2xl font-semibold mt-2">Input Text</h2>
            </div>
            <TextInput value={text} onChange={(e) => setText(e.target.value)} />
          </section>

          <section className="glass-card rounded-2xl p-6 flex flex-col gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Regex</p>
              <h2 className="text-2xl font-semibold mt-2">Regex Pattern</h2>
            </div>
            <RegexInput value={pattern} onChange={(e) => setPattern(e.target.value)} />
            <div className="flex gap-2 mt-2 items-center justify-center">
              <button
                className={`px-3 py-1 rounded cursor-pointer ${flag === "g" ? "bg-cyan-400/80 text-slate-900" : "bg-slate-800/80 text-slate-400"} focus:ring-2 focus:ring-cyan-400/60`}
                onClick={() => setFlag("g")}
              >
                g
              </button>
              <button
                className={`px-3 py-1 rounded cursor-pointer ${flag === "i" ? "bg-cyan-400/80 text-slate-900" : "bg-slate-800/80 text-slate-400"} focus:ring-2 focus:ring-cyan-400/60`}
                onClick={() => setFlag("i")}
              >
                i
              </button>
              <button
                className={`px-3 py-1 rounded cursor-pointer ${flag === "m" ? "bg-cyan-400/80 text-slate-900" : "bg-slate-800/80 text-slate-400"} focus:ring-2 focus:ring-cyan-400/60`}
                onClick={() => setFlag("m")}
              >
                m
              </button>
            </div>
            <p className="text-sm text-slate-400 mt-2">
              Tip: Use <code className="bg-slate-800/80 px-1 rounded">g</code> flag for global matches, <code className="bg-slate-800/80 px-1 rounded">i</code> for case-insensitive, and <code className="bg-slate-800/80 px-1 rounded">m</code> for multiline.
            </p>
          </section>

          <section className="glass-card rounded-2xl p-6 flex flex-col gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Output</p>
              <h2 className="text-2xl font-semibold mt-2">Matches</h2>
            </div>
            <MatchViewer text={text} matches={matches} />
          </section>
        </div>
      </div>
    </div>
  )
}

export default App
