import React from 'react'

export default function Button({name, className, color, theme}) {
  let background;
  if(color === 'secondary'){ background = "bg-secondary hover:bg-red-800"}
  else if (color === 'danger') { background = "bg-red-500 hover:bg-red-800"}
  else { background = "bg-primary hover:bg-secondary"}
  switch (theme){
    case 'small' : 
      return (
        <button className={`${className} ${background} animate btn-small`}>
          {name}
        </button>
      )
    case 'big' :
      return (
        <button className={`${className} ${background} animate btn-big`}>
          {name}
        </button>
      )
    default :
        return (
          <button className={`${className} ${background} animate btn-base`}>
            {name}
          </button>
        )
  }

}
