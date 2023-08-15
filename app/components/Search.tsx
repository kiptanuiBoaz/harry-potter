import { FILTER_CHARACTERS, SET_CHARACTERS } from '@/redux/slice/charactersSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const Search: React.FC = () => {
    const [searchText, setSearchText] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const dispatch = useDispatch();

    //filter in redux store
    useEffect(() => {
        dispatch(FILTER_CHARACTERS({ search: searchText }))
    }, [dispatch, searchText])


    return (
        <div className={`relative rounded-full p-2 transition-all duration-300 ${isFocused ? 'bg-white' : 'bg-gray-200'}`}>
            <input
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className="w-full pl-8 pr-4 py-2 rounded-full outline-none focus:ring focus:ring-blue-300"
                placeholder="Search..."
            />
            {searchText && (
                <button
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                    onClick={() => setSearchText("")}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M15.293 4.293a1 1 0 011.414 1.414L11.414 12l5.293 5.293a1 1 0 11-1.414 1.414L10 13.414l-5.293 5.293a1 1 0 11-1.414-1.414L8.586 12 3.293 6.707a1 1 0 111.414-1.414L10 10.586l5.293-5.293z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            )}
        </div>
    );
};

export default Search;
