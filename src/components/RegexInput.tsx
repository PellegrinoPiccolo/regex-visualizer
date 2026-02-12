import React from 'react'

const RegexInput = ({ value, onChange } : { value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) => {
  return (
    <div className="w-full h-16 p-4 border rounded-lg focus-within:ring-2 focus-within:ring-blue-500">
        <input
            type="text"
            className="w-full h-full outline-none"
            placeholder="Enter your regex pattern here..."
            value={value}
            onChange={onChange}
        />
    </div>
  )
}

export default RegexInput