import { Link } from "react-router-dom";
import styles from "./styles.module.css"

export default function Header(){
    return(
        <header>
            <p>React Stock</p>
            <nav className={styles.navbar}>
                <ul>
                    <li>
                        <Link to={"/"}>Início</Link>
                    </li>
                    <li>
                        <Link to={"/items"}>Items</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}