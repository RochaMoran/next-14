import { getClient } from "@/lib/client";
import { getAll } from "@/lib/characters-queries";
import { ContainerCharacteres } from "../components";

async function serverComponentGetCharacters() {
  const { data } = await getClient().query({
    query: getAll,
  });

  return data.characters.results;
}

export default async function Home() {
  const characters = await serverComponentGetCharacters();

  return <ContainerCharacteres characters={characters} />
}
