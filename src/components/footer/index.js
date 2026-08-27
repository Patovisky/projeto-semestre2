import Image from "next/image";
import Link from 'next/link'
import styles from "./Footer.module.css"


export default function Footer() {
    return(
        <footer className={styles.footer}>
    <div className={styles.footerContainer}>
        <Image src='/duckgif.gif' width={100} height={100} alt="blublu" className={styles.duckImage}/>
        <div className={styles.footerTop}>
            <h2>Química</h2>
            <p>Informações sobre as diversas áreas da química.</p>
        </div>
        <div className={styles.footerInfo}>
            <h3>Projeto front-end II</h3>
            <p>Desenvolvido por PatoTech</p>
            <p>© 2026 Todos os direitos reservados.</p>
            <br></br>
            <div className={styles.footerLinks}>
            <p>Apoiador: <Link href="https://wagner.dev.vilhena.ifro.edu.br/" className={styles.a}>Prof Wagner Ferreira :D</Link></p>
            </div>
        </div>

    </div>
</footer>
    )
}