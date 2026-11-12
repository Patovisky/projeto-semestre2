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
                        <li><Link href="/produtos"><button className={styles.btnPadrao}>Produtos</button></Link></li>
                        <li><Link href="/categorias"><button className={styles.btnPadrao}>Categorias</button></Link></li>
                        <li><Link href="/pedidos"><button className={styles.btnPadrao}>Pedidos</button></Link></li>
                        <li><Link href="/clientes"><button className={styles.btnPadrao}>Clientes</button></Link></li>
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
                            <Link href="/itens_pedido">➤ Itens_pedido</Link>



                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}