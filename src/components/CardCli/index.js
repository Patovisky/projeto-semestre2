import styles from "./CardCli.module.css";

export default function CardCli({ p }) {
    return (
        <div className={styles.div}>
            <h1>Selecionado: </h1>
            <h2>Id: {p.id}</h2>
            <p>Cliente: {p.nome}</p>
        </div>
    )
}