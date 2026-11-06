import styles from "./Card.module.css";

export default function CardProd({p}) {
    return (
        <div className={styles.div}>
            <h1>Selecionado: </h1>
            <p>{p.id}</p>
            <p>{p.nome}</p>
        </div>
    )
}