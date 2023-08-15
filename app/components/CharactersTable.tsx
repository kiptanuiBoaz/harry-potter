import { selectFilterdCharacters } from '@/redux/slice/charactersSlice';
import { selectPagination } from '@/redux/slice/paginationSlice';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';


export const CharactersTable: React.FC = () => {
  //characters from redux store
  const filteredCharacters: HarryPotterCharacter[] = useSelector(selectFilterdCharacters);
  const  { limit, page: currentPage  } = useSelector(selectPagination);

  const from = currentPage * limit;
  const to = from + limit;

  return (filteredCharacters.length ===0 ? <p>No characters found</p>:
    <div className="max-w-md mx-auto">
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2">Date of Birth</th>
              <th className="px-4 py-2">House</th>
            </tr>
          </thead>
          <tbody>
            {filteredCharacters.slice(from,to).map(({ dateOfBirth, name, id ,house}: HarryPotterCharacter, index: number) => (
              <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-100' : ''} hover:bg-gray-300`}>
                <td

                  className="border px-2 sm:px-4 py-1 sm:py-3 text-sm sm:text-base leading-5"
                >
                  <Link href={`character/${id}`}>{name}</Link>
                </td>
                <td className="  border px-2 sm:px-4 py-2 sm:py-3 text-sm sm:text-base leading-5">
                  {dateOfBirth}
                </td>
                <td className="  border px-2 sm:px-4 py-2 sm:py-3 text-sm sm:text-base leading-5">
                  {house}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>


  );
};

