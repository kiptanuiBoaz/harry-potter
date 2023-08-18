"use client"
import { selectTheme } from '@/redux/slice/themeSlice';
import Image from 'next/image';
import React, { useState } from 'react';
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useSelector } from 'react-redux';

export const InfoTable = ({ character, characterInfoArray }: any) => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const theme = useSelector(selectTheme);
  //destructure object into array 
  const { name, gender, image } = character;
  console.log(theme)
  return (
    <div className={`${theme === "light" ? "bg-gray-200" : "bg-#17191d"} flex flex-col lg:flex-row md:px-40 sm:px-20 px-4`}>
      <div className="lg:w-1/2 p-0 sm:p-2 md:p-4">
        {image ? <Image src={image} alt={name} width={500} height={500} /> : <Image src={`/${gender}-placeholder.jpg`} alt={name} width={500} height={500} />}
      </div>
      <div className="lg:w-1/2 p-0 sm:p-2 md:p-4">
        <section className={`max-w-md mx-auto ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
          <h1 className={`p-4 font-bold text-center ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>{name}</h1>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <tbody>
                {characterInfoArray.slice(2, showMore ? 14 : 8).map(({ key, value }: { key: string, value: string }, index: number) => (
                  <tr key={key} className={`${theme === 'dark'
                    ? index % 2 === 0
                      ? 'bg-gray-900'
                      : 'bg-gray-800'
                    : index % 2 === 0
                      ? 'bg-gray-100'
                      : ''
                    } hover:bg-gray-300`}>
                    <td className={`border px-2 sm:px-4 py-1 sm:py-3 text-sm sm:text-base leading-5 ${theme === 'dark' ? 'border-gray-700' : 'border-gray-300'}`}>
                      {key}
                    </td>
                    <td className={`border px-2 sm:px-4 py-2 sm:py-3 text-sm sm:text-base leading-5 ${theme === 'dark' ? 'border-gray-700' : 'border-gray-300'}`}>
                      {value}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td colSpan={2} className={`hover:bg-blue-700 ${theme === 'dark' ? 'bg-blue-600' : 'bg-blue-700'} text-center py-2 cursor-pointer text-white`}>
                    <div className="flex justify-center items-center" onClick={() => setShowMore(!showMore)}>
                      {`See ${showMore ? 'less' : 'more'}`} &nbsp;
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
