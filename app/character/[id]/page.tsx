"use client"
import { Spinner } from "@/app/components/Spinner";
import { api } from "@/axios/axios";
import { Loading } from "notiflix";
import { useEffect, useState } from "react";

const CHARACTER_ROUTE = "/character"

const Character: React.FC<CharacterProps> = ({ params }) => {
  const [isLoading, setIsLoading] = useState<boolean>();
  const [character, setCharacter] = useState<HarryPotterCharacter>();
  const id: string = params.id;


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
    return <Spinner/>
  }
Loading.remove();
  if (!character) {
    return <div>Character not found</div>;
  }
const {species,name,gender,house,dateOfBirth,yearOfBirth,ancestry,eyeColour,hairColour,wand} = character;
  
  return  character &&  <section className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">{name}</h2>
      <p className="mb-2">
        <span className="font-bold">Species:</span> {species}
      </p>
      <p className="mb-2">
        <span className="font-bold">Gender:</span> {gender}
      </p>
      <p className="mb-2">
        <span className="font-bold">House:</span> {house}
      </p>
      <p className="mb-2">
        <span className="font-bold">Date of Birth:</span> {dateOfBirth}
      </p>
      <p className="mb-2">
        <span className="font-bold">Year of Birth:</span> {yearOfBirth}
      </p>
      <p className="mb-2">
        <span className="font-bold">Ancestry:</span> {ancestry}
      </p>
      <p className="mb-2">
        <span className="font-bold">Eye Colour:</span> {eyeColour}
      </p>
      <p className="mb-2">
        <span className="font-bold">Hair Colour:</span> {hairColour}
      </p>
      <div className="mb-2">
        <span className="font-bold">Wand:</span>
        <ul>
          <li>Wood: {wand.wood}</li>
          <li>Core: {wand.core}</li>
          <li>Length: {wand.length}</li>
        </ul>
      </div>
    
    </section>
}

export default Character;