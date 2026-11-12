
'use client'

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import CardItem from "@/components/CardItem";

export default function ItensPedido() {
    const [itens, setItens] = useState(null);
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        const fetchItens = async () => {
            try {
                const response = await fetch('https://stock.dev.vilhena.ifro.edu.br/api/itens_pedido');

                if (!response.ok) {
                    throw new Error(`Erro ao buscar itens ${response.statusText}`);
                }

                const data = await response.json();
                console.log(data);
                setItens(data);
            } catch (e) {
                console.log(`${e.message}`);
            }
        };

        fetchItens();
    }, []);

    return (
        <>
            {
                selected && <CardItem p={selected} />
            }

            {
                !itens ? (<h1>Carregando</h1>) : (
                    <table className={styles.table}>
                        <thead>
                            <tr className={styles.tr}>
                                <th className={styles.th}>ID</th>
                                <th className={styles.th}>PRODUTO ID</th>
                                <th className={styles.th}>PEDIDO Nº</th>
                                <th className={styles.th}>QUANTIDADE</th>
                                <th className={styles.th}>PREÇO UNITÁRIO</th>
                                <th className={styles.th}>STATUS</th>
                            </tr>
                        </thead>

                        <tbody>
                            {itens.map((item) => {
                                return (
                                    <tr
                                        key={item.id}
                                        className={styles.tr}
                                        onClick={() => setSelected(item)}
                                    >
                                        <td className={styles.td}>{item.id}</td>
                                        <td className={styles.td}>{item.produto_id}</td>
                                        <td className={styles.td}>{item.pedido_numero}</td>
                                        <td className={styles.td}>{item.quantidade}</td>
                                        <td className={styles.td}>{item.preco_unitario}</td>
                                        <td className={styles.td}>{item.pedido_status}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                )
            }
        </>
    );
}
