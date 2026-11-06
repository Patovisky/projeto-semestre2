'use client'
import { useEffect, useEffectEvent } from "react";
import { useState } from "react";
import styles from "./page.module.css";
import CardPed from "@/components/CardPed";

export default function Pedidos() {
    const [peds, setPeds] = useState(null);
    const [cats, setCats] = useState(null);
    const [selected, setSelected] = useState(null)
    useEffect(() => {
        const fetchPeds = async () => {
            try {
                const response = await fetch('https://stock.dev.vilhena.ifro.edu.br/api/pedidos')


                if (!response.ok) {
                    throw new Error(`Erro ao buscar Pedidos ${response.statusText}`)
                }


                const data = await response.json();
                console.log(data);
                setPeds(data);
            } catch (e) {
                console.log(`${e.message}`)
            }
        }
        const fetchCats = async () => {
            try {
                const response = await fetch('https://stock.dev.vilhena.ifro.edu.br/api/clientes')

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
        fetchPeds();
    }, [])

    return (
        <>
            {
                cats &&
                peds &&
                <table className={styles.table}>
                    <thead>
                        <tr className={styles.tr}>
                            <th className={styles.th}>ID</th>
                            <th className={styles.th}>CLIENTE</th>
                            <th className={styles.th}>DATA</th>
                            <th className={styles.th}>STATUS</th>

                        </tr>
                    </thead>
                    <tbody>


                        {peds.map(
                            (ped) => {
                                const cat = cats.find((cat) => (cat.id === ped.cliente_id))
                                return (
                                    <tr key={ped.id} className={styles.tr} onClick={() => setSelected(ped)} >
                                        <td className={styles.td}>{ped.id}</td>

                                        <td className={styles.td}>{cat.nome}</td>

                                        <td className={styles.td}>{ped.data_pedido}</td>
                                        <td className={styles.td}>{ped.status}</td>
                                    </tr>
                                )

                            })}


                    </tbody>
                </table >


            }
            {
                selected && <CardPed p={selected} />
            }
        </>
    )
}