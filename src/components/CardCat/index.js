import styles from "./CardCat.module.css";

export default function CardCat({ p }) {
    return (
        <div className={styles.div}>
            <h1>Selecionado: </h1>
            <h2>Id: {p.id}</h2>
            <p>Categoria: {p.nome}</p>
        </div>
    )
}