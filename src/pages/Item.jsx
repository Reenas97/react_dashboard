
import { useNavigate, useParams } from "react-router-dom"
import useItem from "../hooks/useItem"
import StockNavbar from "../components/StockNavbar"
import ButtonWhite from "../components/Buttons/ButtonWhite"
import Cards from "../components/Cards"
import ButtonRed from "../components/Buttons/ButtonRed"
import MainTitle from "../components/MainTitle"


export default function Item(){
    const navigate = useNavigate()
    const {items, removeItem} = useItem()
    const {itemId} = useParams()
    const item = items.find(i => i.id === +itemId)

    if (!item) {
        return <h2 className="errorMessage">Item não encontrado.</h2>;
    }

    function handleDelete(){
        const confirmation = confirm(`
            Deseja excluir permanentemente o item ${item.name}?
        `)
        if(confirmation){
            removeItem(item.id)
            navigate("/items")
        }
    }
    

    return(
        <section>
            <MainTitle title="Stock Items" />
             <StockNavbar />
            <div className="productInternTitle">
                <h2>{item.name}</h2>
                <ButtonWhite
                    className="button"
                    text="Atualizar"
                    link = {`/items/atualizar-item/${item.id}`}
                />
                <ButtonRed
                    className="button"
                    text="Excluir"
                    delete={handleDelete}
                />
            </div>
            <div className="productInternCards">
                <Cards 
                    title= {`Categoria: ${item.category}`}
                />
                <Cards 
                    title= {`Quantidade em estoque: ${item.quantity}`}
                />
                <Cards 
                    title= {`Preço: R$ ${item.price}`}
                />
            </div>
            <p className="productInternDescription">{item.description}</p>
            <div className="productInternDates">
                <p>Cadastrado em: {item.formatedDate}</p>
                {item.updateDate ? <p>Atualizado em: {item.updateDate}</p> : null}
            </div>
        </section>
    )
}