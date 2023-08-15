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
        // console.log(res)
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    fetchPosts();

  }, [dispatch]);

  return (

    <main className="bg-gray-200 min-h-screen flex flex-col justify-center items-center">
      <h1>This is tha app section</h1>
      <CharactersTable />
    </main>

  )
}
