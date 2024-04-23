import React from 'react'

export default function AdminPageHeader({title, subTitle}) {
  return (
    <div>
      <div className="flex flex-col text-[#000000] gap-6">
        <h3 className="font-medium text-[20px]">{title}</h3>
        <span className="font-normal text-base">{subTitle}</span>

      </div>
    </div>
  )
}
