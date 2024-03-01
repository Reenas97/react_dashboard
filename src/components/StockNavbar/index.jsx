import { Link } from "react-router-dom";
import styles from "./styles.module.css"

export default function StockNavbar(props){
    return(
        <div className={`${styles.stockNav} ${props.className ? props.className : ''}`}>
            <Link to={"/items"}>Todos os itens</Link>
            <Link to={"/novo-item"}>Novo item</Link>
        </div>
    )
}