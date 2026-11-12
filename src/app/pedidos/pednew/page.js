
'use client'

import { useEffect } from "react";
import { useState } from "react";
import styles from "./page.module.css";
import CardPed from "@/components/CardPed";

export default function NovoPedido() {
    const [prods, setProds] = useState(null);
    const [clientes, setClientes] = useState(null);
    const [idCliente, setIdCliente] = useState('');
    const [idQuantidade, setIdQuantidade] = useState('');
    const [idProduto, setIdProduto] = useState('');

    useEffect(() => {
        const fetchProds = async () => {
            try {
                const response = await fetch('https://stock.dev.vilhena.ifro.edu.br/api/produtos');

                if (!response.ok) {
                    throw new Error(`Erro ao buscar produtos ${response.statusText}`);
                }

                const data = await response.json();
                console.log(data);
                setProds(data);
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

        fetchProds();
        fetchClientes();
    }, []);

    const enviarPedido = async (e) => {
        e.preventDefault();

        const newPedido = {
            cliente_id: Number(idCliente),
            
        };

        try {
            const response = await fetch(
                'https://stock.dev.vilhena.ifro.edu.br/api/pedidos', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newPedido),
            }
            );

            const data = await response.json();

            if (!response.ok) throw new Error(data.error);

            alert('Pedido enviado');

        } catch (error) {
            alert('Erro ao criar pedido: ' + error.message);
        }
    };

    return (
        <main className={styles.container}>
            <h1 className={styles.title}>Novo pedido</h1>

            <form className={styles.form} onSubmit={enviarPedido}>

                <div className={styles.campo}>
                    <label className={styles.label}>Cliente:</label>

                    <select
                        className={styles.select}
                        value={idCliente}
                        onChange={(e) => setIdCliente(e.target.value)}
                        required
                    >
                        <option value="">Selecione um cliente</option>

                        {clientes && clientes.map((cliente) => (
                            <option key={cliente.id} value={cliente.id}>
                                {cliente.nome}
                            </option>
                        ))}
                    </select>
                </div>

                <div className={styles.campo}>
                    <label className={styles.label}>Produto:</label>

                    <select
                        className={styles.select}
                        value={idProduto}
                        onChange={(e) => setIdProduto(e.target.value)}
                        required
                    >
                        <option value="">Escolha seu produto</option>

                        {prods && prods.map((prod) => (
                            <option key={prod.id} value={prod.id}>
                                {prod.nome}
                            </option>
                        ))}
                    </select>
                </div>

                <div className={styles.campo}>
                    <label className={styles.label}>Quantidade:</label>

                    <input
                        className={styles.input}
                        type="number"
                        value={idQuantidade}
                        onChange={(e) => setIdQuantidade(e.target.value)}
                        placeholder="Quantidade"
                        min="1"
                        required
                    />
                </div>

                <div className={styles.botoes}>
                    <button className={styles.botao} type="submit">
                        Criar pedido
                    </button>

                    <button
                        className={styles.botaoLimpar}
                        type="reset"
                        onClick={() => {
                            setIdCliente('');
                            setIdProduto('');
                            setIdQuantidade('');
                        }}
                    >
                        Limpar
                    </button>
                </div>

            </form>
        </main>
    );
}
