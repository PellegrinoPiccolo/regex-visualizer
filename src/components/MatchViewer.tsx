type MatchViewerProps = {
  text: string;
  matches: string[];
};

const MatchViewer = ({ matches }: MatchViewerProps) => {
  const highlightClasses = [
    "bg-rose-500/30 text-rose-200 ring-1 ring-rose-400/40",
    "bg-cyan-500/25 text-cyan-200 ring-1 ring-cyan-400/40",
    "bg-amber-500/25 text-amber-200 ring-1 ring-amber-400/40",
    "bg-lime-500/20 text-lime-200 ring-1 ring-lime-400/40",
  ];

  return (
    <div className="w-full h-40 md:h-48 p-4 rounded-xl border border-slate-800/80 bg-slate-950/60">
      <div className="w-full h-full overflow-auto whitespace-pre-wrap text-sm text-slate-200/90">
        
        {matches && matches.length > 0 ? (
          <>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">
              {matches.length} matches found
            </p>

            <div className="flex flex-row items-center gap-2 flex-wrap leading-relaxed">
              {matches.map((match, i) => (
                <span
                  key={`${match}-${i}`}
                  className={`px-1.5 py-0.5 rounded-md ${highlightClasses[i % highlightClasses.length]}`}
                >
                  {match}
                </span>
              ))}
            </div>
          </>
        ) : (
          <p className="text-slate-500">No matches found</p>
        )}

      </div>
    </div>
  );
};

export default MatchViewer;
