
import styles from "./CardItem.module.css";

export default function CardItem({ p }) {
    return (
        <div className={styles.div}>
            <h1>Selecionado:</h1>
            <h2>Id: {p.id}</h2>
            <p>Quantidade: {p.quantidade}</p>
            <p>Preço unitário: R$ {p.preco_unitario}</p>
            <p>Produto ID: {p.produto_id}</p>
            <p>Pedido número: {p.pedido_numero}</p>
            <p>Status do pedido: {p.pedido_status}</p>
        </div>
    );
}
