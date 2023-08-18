"use client"
import { Spinner } from "@/app/components/Spinner";
import { api } from "@/axios/axios";
import { Loading } from "notiflix";
import { useEffect, useState } from "react";
import { InfoTable } from "./components/InfoTable";
import { CharacterProps, HarryPotterCharacter } from "@/types";


const CHARACTER_ROUTE = "/character"

const Character: React.FC<CharacterProps> = ({ params }) => {
  const [isLoading, setIsLoading] = useState<boolean>();
  const [character, setCharacter] = useState<HarryPotterCharacter>();

  //character Id from  character id
  const id: string = params?.id;


  useEffect(() => {
    //get all posts from API
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const res = await api.get(`${CHARACTER_ROUTE}/${id}`);

        setCharacter(res.data[0]);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    fetchPosts();

  }, []);


  if (isLoading) {
    return <Spinner />
  }

  if (!character) {
    return <div>Character not found</div>;
  }


  // Converting the HarryPotterCharacter object into an array of key-value pairs
  const characterInfoArray = Object.entries(character)
    .filter(([key]) => key !== 'name' && key !== 'image' && key !== 'wand' && key !== "alternate_names" && key !== "id")
    .map(([key, value]) => ({
      key: key,
      value: value
    }));


  return isLoading
    ? <Spinner />
    : character
    && <InfoTable character={character} characterInfoArray={characterInfoArray} />

}

export default Character;