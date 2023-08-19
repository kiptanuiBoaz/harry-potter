"use client"
import { CharactersTable } from './components/CharactersTable'
import { useEffect, useState } from 'react'
import { api } from '@/axios/axios';
import { useDispatch, useSelector } from 'react-redux';
import { SET_CHARACTERS } from '@/redux/slice/charactersSlice';
import { Spinner } from './components/Spinner';
import { Pagination } from './components/Pagination';
import { selectTheme } from '@/redux/slice/themeSlice';
import { useRouter } from 'next/navigation'
import Cookies from 'universal-cookie';

const CHARACTERS_ROUTE = "/characters"


export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  const router = useRouter(); // Initialize the router
  const cookies = new Cookies();
  let token: string | undefined = "";
  token = process.env.NEXT_PUBLIC_COOKIE_TOKEN;
  let tokenCookie: string | undefined;
  if (token) {
    tokenCookie = cookies.get(token);
  }


  // If the cookie is not present, redirect to the login page


  useEffect(() => {
    const checkCookiePresence = () => {
      if (!tokenCookie) {
        router.push('/login'); // Redirect if the cookie is not present
        return null; // Prevent further rendering
      }
    }
    checkCookiePresence();
  })

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

  return isLoading ? <Spinner /> : (

    <main className={`${theme === "light" ? "bg-gray-200" : "#17191d"} py-4  flex flex-col justify-center items-center`}>
      <CharactersTable />
      <Pagination />
    </main>

  )
}
