"use client"
import { CharactersTable } from './components/CharactersTable'
import { useEffect, useState } from 'react'
import { api } from '@/axios/axios';
import { useDispatch } from 'react-redux';
import { SET_CHARACTERS } from '@/redux/slice/charactersSlice';

const CHARACTERS_ROUTE = "/characters"

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    //get all posts from API
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const res = await api.get(CHARACTERS_ROUTE);
        dispatch(SET_CHARACTERS(res.data))
        // setAllJokes(jokes.data)
        console.log(res)
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    fetchPosts();

  }, [dispatch]);

  const characters = [
    {
      "name": "John Doe",
      "dob": "1990-05-15"
    },
    {
      "name": "Jane Smith",
      "dob": "1985-11-28"
    },
    {
      "name": "Michael Johnson",
      "dob": "2002-03-10"
    },
    {
      "name": "Emily Brown",
      "dob": "1998-08-22"
    },
    {
      "name": "William Davis",
      "dob": "1977-01-05"
    }
  ]

  return (

    <main className="bg-gray-200 min-h-screen flex justify-center items-center">
      <h1>This is tha app section</h1>
      <CharactersTable characters={characters} />
    </main>

  )
}
