import styles from "./styles.module.css"

export default function MainTitle(props){
    return <h1 className={styles.mainTitle}>{props.title}</h1>
}