import React from 'react'
import { TEMPLETE } from './TempleteListSection'
import Image from 'next/image'
import Link  from 'next/link'

function TempleteCard(item: TEMPLETE) {
  return (
    <Link href={`/dashboard/content/${item.slug}`} className="w-full h-full">
      <div className="p-5 shadow-md rounded-md border bg-white flex flex-col gap-3 cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out items-center justify-start h-[250px]">
        <Image src={item.icon} alt="icon" width={50} height={50} />
        <h2 className="font-medium text-lg text-center">{item.name}</h2>
        <p className="text-gray-500 text-center line-clamp-3 text-sm overflow-hidden">
          {item.desc}
        </p>
      </div>
    </Link>
  );
}
export default TempleteCard

