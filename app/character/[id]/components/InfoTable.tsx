"use client"
import Image from 'next/image';
import React,{useState} from 'react';
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

export const InfoTable = ({character,characterInfoArray}:any) => {
    const [showMore, setShowMore] = useState<boolean>(false);
    //destructure object into array 
  const {  name, gender, image} = character;
  return (
    <div className="flex flex-col lg:flex-row md:px-40 sm:px-20 px-6">
    <div className="lg:w-1/2 p-4">

      {image ? <Image src={image} alt={name} width={500} height={500} /> :
        <Image src={`/${gender}-placeholder.jpg`} alt={name} width={500} height={500} />}
    </div>
    <div className="lg:w-1/2 p-4">
      <section className="max-w-md mx-auto">
        <h1 className="p-4 font-bold text-blue-600" >{name}</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">

            <tbody>
              {characterInfoArray.slice(2, showMore ? 14 : 8).map(({ key, value }:{key:string,value:string}, index: number) => (
                <tr key={key} className={`${index % 2 === 0 ? 'bg-gray-100' : ''} hover:bg-gray-300`}>
                  <td className="border px-2 sm:px-4 py-1 sm:py-3 text-sm sm:text-base leading-5">
                    {key}
                  </td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3 text-sm sm:text-base leading-5">
                    {value}
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan={2} className=" hover:bg-blue-700 bg-blue-600 text-center py-2 cursor-pointer text-white">
                  <div className="flex justify-center items-center" onClick={() => setShowMore(!showMore)}>
                    {`See ${showMore ? "less" : "more"}`} &nbsp;
                    {showMore ? <BsChevronUp /> : <BsChevronDown />}
                  </div>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
  )
}
