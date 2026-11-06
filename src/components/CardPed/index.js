import styles from "./CardP.module.css";

export default function CardPed({p}) {
    return (
        <div className={styles.div}>
            <h1>Selecionado: </h1>
            <p>{p.id}</p>
            <p>{p.nome}</p>
        </div>
    )
}