'use client'
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import CardCli from "@/components/CardCli";

export default function Clientes() {
    const [clientes, setClientes] = useState(null);
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        const fetchClientes = async () => {
            try {
                const response = await fetch('https://stock.dev.vilhena.ifro.edu.br/api/clientes');

                if (!response.ok) {
                    throw new Error(`Erro ao buscar clientes ${response.statusText}`);
                }

                const data = await response.json();
                console.log(data);
                setClientes(data);
            } catch (e) {
                console.log(`${e.message}`);
            }
        };

        fetchClientes();
    }, []);

    return (
        <>
            {
                !clientes ? (<h1>carregando</h1>) : (
                    <table className={styles.table}>
                        <thead>
                            <tr className={styles.tr}>
                                <th className={styles.th}>ID</th>
                                <th className={styles.th}>NOME</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clientes.map((cliente) => {
                                return (
                                    <tr key={cliente.id} className={styles.tr} onClick={() => setSelected(cliente)}>
                                        <td className={styles.td}>{cliente.id}</td>
                                        <td className={styles.td}>{cliente.nome}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                )
            }

            {
                selected && <CardCli p={selected} />
            }
        </>
    );
}