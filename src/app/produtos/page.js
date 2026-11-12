'use client'
import { useEffect, useEffectEvent } from "react";
import { useState } from "react";
import styles from "./page.module.css";
import CardProd from "@/components/CardProd";

export default function Produtos() {
    const [prods, setProds] = useState(null);
    const [cats, setCats] = useState(null);
    const [selected, setSelected] = useState(null);
    const [busca, setBusca] = useState('');

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

    const filtro = prods?.filter(p => p.nome.toLowerCase().includes(busca.toLocaleLowerCase()))

    return (
        <>

            <h1>Produtos</h1>
            
            {filtro &&
                filtro.map((f) => (<p key={f.id}>{f.nome}</p>))}
            <input type="text" placeholder="Busque um produto" onChange={(e) => setBusca(e.target.value)} value={busca} />
            {selected && <CardProd p={selected} />}
            {
                cats &&
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


                        {prods.map((prod) => {
                            const cat = cats.find(
                                (cat) => Number(cat.id) === Number(prod.categoria_id)
                            );

                            return (
                                <tr
                                    key={prod.id}
                                    className={styles.tr}
                                    onClick={() => setSelected(prod)}
                                >
                                    <td className={styles.td}>{prod.id}</td>
                                    <td className={styles.td}>{prod.nome}</td>
                                    <td className={styles.td}>{prod.descricao}</td>
                                    <td className={styles.td}>
                                        {cat ? cat.nome : 'Sem categoria'}
                                    </td>
                                    <td className={styles.td}>{prod.quantidade_estoque}</td>
                                    <td className={styles.td}>{prod.preco}</td>
                                </tr>
                            );
                        })}


                    </tbody>
                </table >


            }
            
        </>
    )
}