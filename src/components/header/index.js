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
                <nav>

                    <ul className={styles.ulMenu}>
                        
                        
                        <li><Link href="/"><button className={styles.btnPadrao}>Home</button></Link></li>
                        <li><Link href="/organica"><button className={styles.btnPadrao}>Química orgânica</button></Link></li>
                        <li><Link href="/inorganica"><button className={styles.btnPadrao}>Química inorgânica</button></Link></li>
                        <li><Link href="/fisicoQuimica"><button className={styles.btnPadrao}>Físico-química</button></Link></li>
                        <li><Link href="/bioquimica"><button className={styles.btnPadrao}>Bioquímica</button></Link></li>
                        <li><Link href="/analitica"><button className={styles.btnPadrao}>Analítica</button></Link></li>
                        <li><Link href="/brb"><button className={styles.btnPadrao}>BREAKING BAD?!</button></Link></li>
                        
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