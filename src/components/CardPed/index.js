import styles from "./CardP.module.css";

export default function CardPed({ p }) {
    return (
        <div className={styles.div}>
            <h1>Selecionado: </h1>
            <h2>Pedido {p.id}</h2>
            <p>Cliente: {p.cliente.nome}</p>
            <p>Data: {p.data_pedido}</p>
            <p>Status: {p.status}</p>
        </div>
    )
}