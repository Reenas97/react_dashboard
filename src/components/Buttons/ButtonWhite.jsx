import { Link } from "react-router-dom"
import styles from "./styles.module.css"

export default function ButtonWhite(props){
    return (
        <Link 
            to={props.link}
            className={`${styles.btnWhite} ${props.className}`}
        >
            {props.text}
        </Link>
    )
}