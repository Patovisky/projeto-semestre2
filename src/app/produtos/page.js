'use client'
import { useEffect, useEffectEvent } from "react";
import { useState } from "react";
import styles from "./page.module.css";


export default function Produtos() {
    const [prods, setProds] = useState(null);
    useEffect(() => {
        const fetchProds = async () => {
            try {
                const response = await fetch('https://stock.dev.vilhena.ifro.edu.br/api/produtos')


                if (!response.ok) {
                    throw new Error(`Erro ao buscar produtos ${response.statusText}`)
                }


                const data = await response.json();
                console.log(data);
                setProds(data);
            } catch (e) {
                console.log(`${e.message}`)
            }


        }
        fetchProds()
    }, [])
    return (
        <>
            {
                prods &&
                <table className={styles.table}>
                    <thead>
                        <tr className={styles.tr}>
                            <th className={styles.th}>ID</th>
                            <th className={styles.th}>NOME</th>
                            <th className={styles.th}>DESCRIÇÃO</th>
                            <th className={styles.th}>CATEGORIA</th>
                            <th className={styles.th}>ESTOQUE</th>
                            <th className={styles.th}>PREÇO</th>
                        </tr>
                    </thead>
                    <tbody>


                        {prods.map((prod) => (
                            <tr key={prod.id} className={styles.tr}>
                                <td className={styles.td}>{prod.id}</td>
                                <td className={styles.td}>{prod.nome}</td>
                                <td className={styles.td}>{prod.descricao}</td>
                                <td className={styles.td}>{prod.categoria_id}</td>
                                <td className={styles.td}>{prod.quantidade_estoque}</td>
                                <td className={styles.td}>{prod.preco}</td>
                            </tr>
                        ))}


                    </tbody>
                </table>


            }
        </>
    )
}



