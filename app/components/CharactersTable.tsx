import React from 'react';

interface Character {
  name: string;
  dob: string;
}

interface CharacterTableProps {
  characters: Character[];
}

export const CharactersTable: React.FC<CharacterTableProps> = ({ characters }) => {
  return (
    <div className="max-w-md mx-auto">
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          {characters.map((character, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
              <td className="border px-4 py-2">{character.name}</td>
              <td className="border px-4 py-2">{character.dob}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

