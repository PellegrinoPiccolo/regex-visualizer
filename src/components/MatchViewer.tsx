import { hightlightText } from "../utils/highlightText";

type MatchViewerProps = {
  text: string;
  matches: string[];
};

const MatchViewer = ({ text, matches }: MatchViewerProps) => {
  const parts = matches && matches.length > 0
    ? hightlightText(text, matches)
    : [];

  return (
    <div className="w-full h-64 p-4 border rounded-lg">
      <div className="w-full h-full overflow-auto whitespace-pre-wrap">
        
        {matches && matches.length > 0 ? (
          <>
            <p className="text-sm text-gray-500 mb-2">
              {matches.length} match trovati
            </p>

            <div className="flex flex-row items-center gap-2 flex-wrap">
                {parts.map((part, i) => (
                <span
                    key={i}
                    className={part.highlight ? "bg-yellow-300" : ""}
                >
                    {part.text}
                </span>
                ))}
            </div>
          </>
        ) : (
          <p className="text-gray-500">No matches found</p>
        )}

      </div>
    </div>
  );
};

export default MatchViewer;
