import { Link } from "react-router-dom"
import styles from "./styles.module.css"

export default function ButtonBlue(props){
    return (
        <Link 
            to={props.link}
            className={`${styles.btnBlue} ${props.className}`}
        >
            {props.text}
        </Link>
    )
}