import { formatDate } from '@/lib/resolveDate';
import { selectFilterdCharacters } from '@/redux/slice/charactersSlice';
import { selectPagination } from '@/redux/slice/paginationSlice';
import { selectTheme } from '@/redux/slice/themeSlice';
import { HarryPotterCharacter } from '@/types';
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';


export const CharactersTable: React.FC = () => {
  //characters from redux store
  const filteredCharacters: HarryPotterCharacter[] = useSelector(selectFilterdCharacters);
  const { limit, page: currentPage } = useSelector(selectPagination);
  const theme = useSelector(selectTheme);

  //for pagination
  const from = currentPage * limit;
  const to = from + limit;

  return (filteredCharacters.length === 0 ? <p className={`${theme === "dark"} ? text-white : text-black`}>No characters found</p> :
    <section className="max-w-md mx-auto">
      <div className="overflow-x-auto">
        <table className={`min-w-full table-auto ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
          <thead>
            <tr>
              <th className={`px-4 py-2 text-left ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`}>Name</th>
              <th className={`px-4 py-2 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`}>Date of Birth</th>
              <th className={`px-4 py-2 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`}>House</th>
            </tr>
          </thead>
          <tbody>
            {filteredCharacters.slice(from, to).map(({ dateOfBirth, name, id, house }: HarryPotterCharacter, index: number) => (
              <tr
                key={index}
                className={`${theme === 'dark'
                    ? index % 2 === 0
                      ? 'bg-gray-900'
                      : 'bg-gray-800'
                    : index % 2 === 0
                      ? 'bg-gray-100'
                      : ''
                  } ${theme === 'dark' ? 'text-white' : 'text-black'}`}
              >
                <td className={`border hover:underline px-2 sm:px-4 py-0 sm:py-3 text-sm sm:text-base leading-5 ${theme === 'dark' ? 'border-gray-700' : 'border-gray-300'}`}>
                  <Link href={`character/${id}`}>{name}</Link>
                </td>
                <td className={`border px-2 sm:px-4 py-2 sm:py-3 text-sm sm:text-base leading-5 ${theme === 'dark' ? 'border-gray-700' : 'border-gray-300'}`}>
                  {formatDate(dateOfBirth)}
                </td>
                <td className={`border px-2 sm:px-4 py-2 sm:py-3 text-sm sm:text-base leading-5 ${theme === 'dark' ? 'border-gray-700' : 'border-gray-300'}`}>
                  {house}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>






  );
};

