import Image from "next/image";
import styles from "./page.module.css";

export default function Organica() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.infoConfig}>
            <h2>Extra: Spin</h2>
            <p className={styles.pinfo}>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Fusce tincidunt sapien vitae magna malesuada, quis tincidunt
                justo elementum. Integer vitae libero nec lorem facilisis.
              </span>
            </p>
          </div>
      </main>
    </div>
  );
}
