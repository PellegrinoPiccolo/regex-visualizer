import React from 'react'

const RegexInput = ({ value, onChange } : { value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) => {
  return (
    <div className="w-full h-16 p-4 rounded-xl border text-sm border-slate-800/80 bg-slate-950/60 shadow-lg shadow-slate-950/40 focus-within:ring-2 focus-within:ring-cyan-400/60">
        <input
            type="text"
            className="w-full h-full outline-none bg-transparent text-slate-100 placeholder:text-slate-500 font-mono"
            placeholder="Enter your regex pattern here..."
            value={value}
            onChange={onChange}
        />
    </div>
  )
}

export default RegexInput