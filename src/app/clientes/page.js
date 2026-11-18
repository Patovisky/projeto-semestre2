
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
        <main className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Clientes</h1>
                <p className={styles.subtitle}>
                    Clique em um cliente abaixo para visualizar os detalhes
                </p>
            </header>

            {selected && (
                <section className={styles.cardWrapper}>
                    <CardCli p={selected} />
                </section>
            )}

            {!clientes ? (
                <div className={styles.loading}>Carregando clientes...</div>
            ) : (
                <div className={styles.tableCard}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th className={styles.th}>ID</th>
                                <th className={styles.th}>NOME</th>
                            </tr>
                        </thead>

                        <tbody>
                            {clientes.map((cliente) => (
                                <tr
                                    key={cliente.id}
                                    className={`${styles.tr} ${selected?.id === cliente.id ? styles.trSelected : ''}`}
                                    onClick={() => setSelected(cliente)}
                                >
                                    <td className={styles.tdId}>#{cliente.id}</td>
                                    <td className={styles.td}>{cliente.nome}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </main>
    );
}
