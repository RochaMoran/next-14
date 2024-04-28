import Character from "./character";
import styles from "../page.module.css";

export default function ContainerCharacters({ characters }: any) {
  return (
    <div className={styles.container_cards}>
      {characters.map((character: any) => (
        <Character key={character.name} character={character} />
      ))}
    </div>
  );
}
