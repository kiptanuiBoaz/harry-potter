import { selectFilterdCharacters } from '@/redux/slice/charactersSlice';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';


export const CharactersTable: React.FC = () => {
  //characters from redux store
  const characters: HarryPotterCharacter[] = useSelector(selectFilterdCharacters);


  return (
    <div className="max-w-md mx-auto">
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2">Date of Birth</th>
            </tr>
          </thead>
          <tbody>
            {characters.map(({ dateOfBirth, name, id }: HarryPotterCharacter, index: number) => (
              <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-100' : ''} hover:bg-gray-300`}>
                <td

                  className="border px-2 sm:px-4 py-2 sm:py-3 text-sm sm:text-base leading-5"
                >
                  <Link href={`character/${id}`}>{name}</Link>
                </td>
                <td className="  border px-2 sm:px-4 py-2 sm:py-3 text-sm sm:text-base leading-5">
                  {dateOfBirth}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>


  );
};

