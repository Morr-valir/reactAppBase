import React from 'react'

export default function Container({children}) {
  return (
    <div className='max-w-6xl m-auto'>
        {children}
    </div>
  )
}
