import React from 'react'

export default function Button({name, className}) {
  return (
    <button className={`${className}animate shadow-xl px-5 py-3 uppercase text-white tracking-widest text-sm font-medium`}>
        {name}
    </button>
  )
}
