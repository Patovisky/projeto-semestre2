import { useEffect, useEffectEvent } from "react";

export default function Produtos() {
    return (
        useEffect(() => {
            const fetchProds = () => {
                const response = fetch('https://stock.dev.vilhena.ifro.edu.br/api/produtos')
                if (!response.ok) {
                    throw new Error(`Erro ao buscar produtos ${response.statusText}`)
                }
            }
        }, [])
        
    )
}