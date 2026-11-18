
'use client'

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import CardPed from "@/components/CardPed";
import Link from "next/link";
import NovoPedido from "./pednew/page";

export default function Pedidos() {
    const [peds, setPeds] = useState(null);
    const [clientes, setClientes] = useState(null);
    const [selected, setSelected] = useState(null);
    const [mostrar, setMostrar] = useState(false)

    useEffect(() => {
        const fetchPeds = async () => {
            try {
                const response = await fetch('https://stock.dev.vilhena.ifro.edu.br/api/pedidos');

                if (!response.ok) {
                    throw new Error(`Erro ao buscar pedidos ${response.statusText}`);
                }

                const data = await response.json();
                console.log(data);
                setPeds(data);

            } catch (e) {
                console.log(`${e.message}`);
            }
        };

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
        fetchPeds();
    }, []);

    return (
        <main className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Pedidos</h1>
                <p className={styles.subtitle}>
                    Clique em um pedido abaixo para visualizar os detalhes
                </p>
            </header>
            <button className={styles.button} onClick={() => setMostrar(!mostrar)}>
                {mostrar ? 'Fechar' : 'Mostrar criar pedido'}
            </button>
            {mostrar && <NovoPedido />}

            {selected && (
                <section className={styles.cardWrapper}>
                    <CardPed p={selected} />
                </section>
            )}

            {!clientes || !peds ? (
                <div className={styles.loading}>
                    Carregando pedidos...
                </div>
            ) : (
                <div className={styles.tableCard}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th className={styles.th}>ID</th>
                                <th className={styles.th}>CLIENTE</th>
                                <th className={styles.th}>DATA</th>
                                <th className={styles.th}>STATUS</th>
                            </tr>
                        </thead>

                        <tbody>
                            {peds.map((ped) => {
                                const cliente = clientes.find(
                                    (cliente) => cliente.id === ped.cliente_id
                                );

                                return (
                                    <tr
                                        key={ped.id}
                                        className={`${styles.tr} ${selected?.id === ped.id ? styles.trSelected : ''}`}
                                        onClick={() => setSelected({
                                            ...ped,
                                            cliente: cliente
                                        })}
                                    >
                                        <td className={styles.tdId}>#{ped.id}</td>
                                        <td className={styles.td}>
                                            {cliente ? cliente.nome : 'Cliente não encontrado'}
                                        </td>
                                        <td className={styles.td}>{ped.data_pedido}</td>
                                        <td className={styles.td}>{ped.status}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            )}
        </main>
    );
}
