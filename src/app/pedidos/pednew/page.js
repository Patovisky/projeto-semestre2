'use client'
import { useEffect } from "react";
import { useState } from "react";
import styles from "./page.module.css";
import CardPed from "@/components/CardPed";

const enviarPedido = async (e) => {
    e.preventDefault();

    const newPedido = {
        cliente_id: clienteSelecionado
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


    } catch (error) {
        alert('Erro ao criar pedido: ' + error.message);
    }
};

export default function NovoPedido() {
    return (
        <form onSubmit={enviarPedido}>
            <label>Cliente:</label>
            <input type="number" placeholder="ID do cliente" required />

            <label>Produto:</label>
            <input type="number" placeholder="ID do produto" required />

            <label>Quantidade:</label>
            <input type="number" placeholder="Quantidade" min="1" required />

            <button type="submit">Criar pedido</button>
            <button type="reset">Limpar</button>
        </form>
    )
}