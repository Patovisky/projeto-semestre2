
'use client'

import Link from 'next/link'
import styles from './Header.module.css'
import { useState } from 'react'

export default function Header() {
    const [menu, setMenu] = useState(false)

    return (
        <header className={styles.header}>
            <div className={styles.allMenu}>
                <nav>
                    <ul className={`${styles.ulMenu} ${menu ? styles.menuAberto : ''}`}>
                        <li><Link href="/" onClick={() => setMenu(false)}>Home</Link></li>
                        <li><Link href="/produtos" onClick={() => setMenu(false)}>Produtos</Link></li>
                        <li><Link href="/categorias" onClick={() => setMenu(false)}>Categorias</Link></li>
                        <li><Link href="/pedidos" onClick={() => setMenu(false)}>Pedidos</Link></li>
                        <li><Link href="/clientes" onClick={() => setMenu(false)}>Clientes</Link></li>
                        <li><Link href="/itens_pedido" onClick={() => setMenu(false)}>Itens_pedido</Link></li>
                    </ul>
                </nav>

                <button
                    className={styles.dropbtn}
                    onClick={() => setMenu(!menu)}
                    aria-label="Abrir ou fechar menu"
                >
                    {menu ? '✕' : '☰'}
                </button>
            </div>
        </header>
    )
}
