'use client'
import { useEffect, useEffectEvent } from "react";
import { useState } from "react";
import styles from "./page.module.css";
import CardCat from "@/components/CardCat";

export default function Categorias() {
    const [cats, setCats] = useState(null);
    const [selected, setSelected] = useState(null)
    useEffect(() => {
        const fetchCats = async () => {
            try {
                const response = await fetch('https://stock.dev.vilhena.ifro.edu.br/api/categorias')

                if (!response.ok) {
                    throw new Error(`Erro ao buscar categorias ${response.statusText}`)
                }

                const data = await response.json();
                console.log(data);
                setCats(data)
            } catch (e) {
                console.log(`${e.message}`)
            }
        }
        fetchCats();
    }, [])
    return (
        <>
            {
                cats &&
                <table className={styles.table}>
                    <thead>
                        <tr className={styles.tr}>
                            <th className={styles.th}>ID</th>
                            <th className={styles.th}>NOME</th>
                        </tr>
                    </thead>
                    <tbody>


                        {cats.map((cat) => (
                            <tr key={cat.id} className={styles.tr} onClick={()=> setSelected(cat)}>
                                <td className={styles.td}>{cat.id}</td>
                                <td className={styles.td}>{cat.nome}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>

            }
            {selected && <CardCat p={selected} />}
        </>
    )
}
