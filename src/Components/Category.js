import React from 'react'

const Category = ({id,title,onhandlecategoryclick}) => {
  return (
    <div key={id} onClick={onhandlecategoryclick}>{title}</div>
  )
}

export default Category