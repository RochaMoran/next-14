import Image from "next/image";
import styles from "./page.module.css";
import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";

async function loadData(){
  const {data} = await getClient().query({
    query: gql`
      query {
        characters(page: 1) {
          results {
            name,
            image
          }
        }
      }
    `,
  })

  return data.characters.results;
}

export default async function Home() {
  const characters = await loadData();

  return (
    <div className={styles.container_cards}>
      {
        characters.map((character: any) => (
          <div key={character.name}>
            <img
              src={character.image}
              alt={character.name}
            />
            <p>{character.name}</p>
          </div>
        ))
      }
    </div>
  );
}
