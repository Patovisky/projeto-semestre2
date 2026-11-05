'use client'
import { useEffect, useEffectEvent } from "react";
import { useState } from "react";
import styles from "./page.module.css";

export default function Produtos() {
    const [prods, setProds] = useState(null);
    const [cats, setCats] = useState(null);
    useEffect(() => {
        const fetchProds = async () => {
            try {
                const response = await fetch('https://stock.dev.vilhena.ifro.edu.br/api/produtos')
                // console.log(response)
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
        const fetchCats = async () => {
            try {
                const response = await fetch('https://stock.dev.vilhena.ifro.edu.br/api/categorias')

                if (!response.ok) {
                    throw new Error(`Erro ao buscar categorias ${response.statusText}`)
                }

                const data = await response.json();
                console.log(data);
                setCats(data);
            } catch (e) {
                console.log(`${e.message}`)
            }
        }

        fetchCats();
        fetchProds();
    }, [])

    return (
        <div className={styles.div}>
            <h1>Produtos</h1>
            {prods === null ? <p>Carregando lista de produtos...</p> :
                <div>
                    {prods.map((prod) => (
                        <p key={prod.id}>{prod.nome}</p>
                    ))}
                </div>
            }

        </div>
    )
}
