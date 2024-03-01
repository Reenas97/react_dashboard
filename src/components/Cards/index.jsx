import styles from "./styles.module.css"

export default function Cards(props){
    return(
        <div className={styles.card}>
            <h2>{props.title}</h2>
            <p>{props.number}</p>
        </div>
    )
}