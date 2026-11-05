'use client'
import Image from "next/image";
import Link from 'next/link'
import styles from './Header.module.css'
import { useState } from 'react'

export default function Header() {
    const [menu, setMenu] = useState('☰')

    return (
        <header className={styles.header}>
            <div className={styles.allMenu}>
                <Image
                            src="/logo.png"
                            alt="Exemplos de radicais orgânicos"
                            width={100}
                            height={50}
                            className={styles.imgLogo}
                        />
                <nav>
                    <ul className={styles.ulMenu}>
                        <li><Link href="/"><button className={styles.btnPadrao}>Home</button></Link></li>
                        <li><Link href="/produtos"><button className={styles.btnPadrao}>Produtos</button></Link></li>
                        <li><Link href="/categorias"><button className={styles.btnPadrao}>Categorias</button></Link></li>
                    </ul>

                </nav>

                <div className={styles.dropdown}>
                    <button
                        className={styles.dropbtn}
                        onClick={() => setMenu(menu === '☰' ? '✕' : '☰')}
                    >
                        {menu}
                    </button>

                    {menu === '✕' && (
                        <div className={styles.dropdownContent}>
                            <Link href="/tabela">➤ Tabela periódica</Link>

                            <Link href="linus">➤ Diagrama de Linus Pauling</Link>
                            <Link href="estequi">➤ Estequiometria</Link>


                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}