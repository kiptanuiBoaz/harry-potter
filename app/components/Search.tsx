"use client"
import { FILTER_CHARACTERS } from '@/redux/slice/charactersSlice';
import { selectTheme } from '@/redux/slice/themeSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Search: React.FC = () => {
    const [searchText, setSearchText] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const theme = useSelector(selectTheme);

    const dispatch = useDispatch();

    // Filter in redux store
    useEffect(() => {
        dispatch(FILTER_CHARACTERS({ search: searchText }));
    }, [dispatch, searchText]);

    return (
        <div className={`relative rounded-full p-0 transition-all duration-300 ${isFocused ? (theme === 'dark' ? 'bg-white' : 'bg-white') : (theme === 'dark' ? '#292f38' : '#e6e8ea')}`}>
            <input
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className={`w-full pl-6 pr-3 py-1 rounded-full outline-none focus:ring ${theme === 'dark' ? 'focus:ring-blue-300' : 'focus:ring-purple-300'} 
                            sm:pl-5 sm:pr-3 sm:py-1.5 sm:text-sm md:pl-10 md:pr-5 md:py-2 md:text-base`}
                placeholder="Search..."
                style={{ color: 'black' }} 
            />
            {searchText && (
                <button
                    className={`absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none ${theme === 'dark' ? 'focus:text-blue-300' : 'focus:text-purple-300'}`}
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
