import React from 'react'

const TextInput = ({ value, onChange } : { value: string, onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void }) => {
  return (
    <div className="w-full h-64 p-4 rounded-xl border border-slate-800/80 bg-slate-950/60 shadow-lg shadow-slate-950/40 focus-within:ring-2 focus-within:ring-cyan-400/60">
        <textarea
            className="w-full h-full resize-none outline-none bg-transparent text-slate-100 placeholder:text-slate-500"
            placeholder="Enter your text here..."
            value={value}
            onChange={onChange}
        ></textarea>
    </div>
  )
}

export default TextInput