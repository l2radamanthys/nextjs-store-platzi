import styles from "./page.module.css";

export default function Home() {
  console.log("Hola Mundo pagina de inicio");
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Hola Mundo</h1>
      </main>
    </div>
  );
}
