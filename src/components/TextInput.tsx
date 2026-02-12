import React from 'react'

const TextInput = ({ value, onChange } : { value: string, onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void }) => {
  return (
    <div className="w-full h-64 p-4 border rounded-lg focus-within:ring-2 focus-within:ring-blue-500">
        <textarea
            className="w-full h-full resize-none outline-none"
            placeholder="Enter your text here..."
            value={value}
            onChange={onChange}
        ></textarea>
    </div>
  )
}

export default TextInput