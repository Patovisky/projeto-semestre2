'use client'
import Link from 'next/link'
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.integrantes}>

        <div className={styles.card}>
          <img
            className={styles.foto}
            src="/johnny.jpeg"
            alt="Foto do integrante"
          />
          <h1>Ester Ronconi Dias</h1>
        </div>

        <div className={styles.card}>
          <img
            className={styles.foto}
            src="/foto1.jpeg"
            alt="Foto do integrante"
          />
          <h1>marcela Rocha Dias</h1>
        </div>

      </div>

      <footer className={styles.footer}>
        <h2>2A informática, IFRO - campus Vilhena</h2>
      </footer>
    </main>
  );
}