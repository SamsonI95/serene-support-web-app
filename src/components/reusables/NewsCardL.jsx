import React from 'react'

const NewsCardL = ({image, title, content}) => {
  return (
    <div className="relative p-5 w-[330px]  mb-10 rounded-md">
      <div className="rounded-md">
        <img src={image} alt={title} />
      </div>
      <h3 className="font-bold text-2xl mt-8 mb-3">{title}</h3>
      <p>{content}</p>
    </div>
  )
}

export default NewsCardL