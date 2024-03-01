import ButtonBlue from "../components/Buttons/ButtonBlue";
import ButtonRed from "../components/Buttons/ButtonRed";
import ButtonWhite from "../components/Buttons/ButtonWhite";
import MainTitle from "../components/MainTitle";
import StockNavBar from "../components/StockNavbar";
import useItem from "../hooks/useItem";

export default function Items(){
    const { items, removeItem } = useItem();
    return(
        <>
            <MainTitle title = "Stock Items"/>
            <section>
                <StockNavBar className = "fistButtonActive" />
                    {items.length > 0 ? 
                        <div className="tableContainer">
                            <table>
                                <thead>
                                    <tr>
                                        <td>ID</td>
                                        <td>Nome</td>
                                        <td>Em Estoque</td>
                                        <td>Categoria</td>
                                        <td>Ações</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {items.map((item) =>(
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.quantity} unid.</td>
                                                <td>{item.category}</td>
                                                <td>
                                                    <span className="buttonsContainer">
                                                        <ButtonBlue
                                                            className = "button"
                                                            text = "Ver"
                                                            link = {`/items/${item.id}`}
                                                        />
                                                        <ButtonWhite
                                                            className = "button"
                                                            text = "Atualizar"
                                                            link = {`/items/atualizar-item/${item.id}`}
                                                        />
                                                        <ButtonRed
                                                            className = "button"
                                                            text = "Excluir"
                                                            delete = {() => removeItem(item.id)}
                                                        />
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}                            
                                </tbody>
                            </table>
                        </div>
                    : <h2 className="noItemsFound">Aindá não há itens cadastrados</h2>}
            </section>
        </>
    )
}