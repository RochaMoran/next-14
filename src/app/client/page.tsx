"use client"

import { gql, useSuspenseQuery } from "@apollo/client"
import styles from "../page.module.css";

const query = gql`
    query {
        characters(page: 1) {
          results {
            name,
            image
          }
        }
    }
`;

export default function ClientPage() {
    const { data }: any = useSuspenseQuery(query)

    console.log(data);

    return (
        <div className={styles.container_cards}>
        {
          data.characters.results.map((character: any) => (
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
    )
}