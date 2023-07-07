import React from 'react'

const head = ({title, icons}) => {
  return (
    <>
        <title>{title}</title> 
        <link rel='shortcut icon' href={icons} type='image/x-icon' />
    </>
  )
}

export default head;
