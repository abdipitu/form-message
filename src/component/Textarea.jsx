import React from 'react'

const Textarea = ({ name, placeholder }) => {
  return (
    <div>
      <textarea id="" placeholder={placeholder} name={name} className="w-full border rounded py-1.5 px-3 text-sm placeholder:text-primary" rows="5"></textarea>
    </div>
  )
}

export default Textarea
