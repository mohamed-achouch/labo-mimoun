import React from 'react'

const MainTitle = ({name}) => {
  return (
    <h1 className=' text-custom-primary text-[20px] font-semibold relative before:content-[""] before:absolute before:-bottom-2 before:h-1 before:w-[120px] before:bg-custom-secondary'>{name}</h1>
  )
}

export default MainTitle