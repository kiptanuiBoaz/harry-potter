"use client"
import { CharactersTable } from './components/CharactersTable'
import { useEffect, useState } from 'react'
import { api } from '@/axios/axios';
import {Provider} from 'react-redux';
import store from "@/redux/store";
const CHARACTERS_ROUTE = "/characters"

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    //get all posts from API
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const allCharacters = await  api.get(CHARACTERS_ROUTE);
        // setAllJokes(jokes.data)
        console.log(allCharacters.data)
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    fetchPosts();

  }, []);
  
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
    <Provider store={store}>
    <main className="bg-gray-200 min-h-screen flex justify-center items-center">
      <h1>This is tha app section</h1>
      <CharactersTable characters={characters}/>
      </main>
      </Provider>
  )
}
