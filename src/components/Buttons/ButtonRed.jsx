import styles from "./styles.module.css"

export default function ButtonRed(props){
    return (
        <button 
            className={`${styles.btnRed} ${props.className}`}
            onClick={props.delete}
            type={props.type}
        >
            Excluir
        </button>
    )
}