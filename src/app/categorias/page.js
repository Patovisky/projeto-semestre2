'use client'
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import CardCat from "@/components/CardCat";
export default function Categorias() {
    const [cats, setCats] = useState(null);
    const [selected, setSelected] = useState(null);
    useEffect(() => {
        const fetchCats = async () => {
            try {
                const response = await fetch('https://stock.dev.vilhena.ifro.edu.br/api/categorias');
                if (!response.ok) {
                    throw new Error(`Erro ao buscar categorias ${response.statusText}`);
                }
                const data = await response.json();
                setCats(data);
            } catch (e) {
                console.log(`${e.message}`);
            }
        };
        fetchCats();
    }, []);
    return (
        <main className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Categorias de Estoque</h1>
                <p className={styles.subtitle}>Clique em uma categoria
                    abaixo para visualizar os detalhes</p>
            </header>
            {selected && (
                <section className={styles.cardWrapper}>
                    <CardCat p={selected} />
                </section>
            )}

            {!cats ? (
                <div className={styles.loading}>Carregando categorias...</div>
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
                            {cats.map((cat) => (
                                <tr
                                    key={cat.id}
                                    className={`${styles.tr} ${selected?.id === cat.id ? styles.trSelected : ''}`}
                                    onClick={() => setSelected(cat)}
                                >
                                    <td className={styles.tdId}>#{cat.id}
                                    </td>
                                    <td className={styles.td}>{cat.nome}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </main>
    );
}
