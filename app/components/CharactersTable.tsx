import { selectCharacters } from '@/redux/slice/charactersSlice';
import React from 'react';
import { useSelector } from 'react-redux';

interface Character {
  name: string;
  dob: string;
}


export const CharactersTable: React.FC = () => {
  const characters: HarryPotterCharacter[] = useSelector(selectCharacters);
  
  return (
    <div className="max-w-md mx-auto">
  <div className="overflow-x-auto">
    <table className="min-w-full table-auto">
      <thead>
        <tr>
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Date of Birth</th>
        </tr>
      </thead>
      <tbody>
        {characters.map(({ dateOfBirth, name }: HarryPotterCharacter, index: number) => (
          <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
            <td className="border px-2 sm:px-4 py-2 sm:py-3 text-sm sm:text-base leading-5">
              {name}
            </td>
            <td className="border px-2 sm:px-4 py-2 sm:py-3 text-sm sm:text-base leading-5">
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

