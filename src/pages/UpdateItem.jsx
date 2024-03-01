import { useState } from "react";
import MainTitle from "../components/MainTitle";
import StockNavbar from "../components/StockNavbar";
import useItem from "../hooks/useItem";
import { useNavigate, useParams } from "react-router-dom";


export default function UpdateItem(){
    const {items} = useItem()
    const {itemId} = useParams()
    const item = items.find(i => i.id === +itemId)
    const navigate = useNavigate()
    const {updateItem } = useItem();
    const [name, setName] = useState(item.name)
    const [quantity, setQuantity] = useState(item.quantity)
    const [price, setPrice] = useState(item.price)
    const [category, setCategory] = useState(item.category)
    const [description, setDescription] = useState(item.description)

    function handleSubmit(ev){
        ev.preventDefault()

        const updatedItem = {
            ...item,
            name: name,
            quantity: quantity,
            price: price,
            category: category,
            description: description, 
            updateDate: new Date().toLocaleString()
        };

        updateItem(updatedItem);

        setName("")
        setQuantity("")
        setPrice("")
        setCategory("")
        setDescription("")

        setTimeout(() => {
            navigate(`/items/${item.id}`)
            alert("Item atualizado com sucesso!")
        }, 100);
    }
    return(
        <>
            <MainTitle title= "Stock Items" />
            <StockNavbar />
            <div className="productInternTitle">
                <h2>Atualizar item: {item.name}</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="inputsContainer">
                    <div>
                        <label htmlFor="name">Nome</label>
                        <input 
                            type="text" 
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="quantity">Quantidade</label>
                        <input 
                            type="number"
                            id="quantity" 
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="price">Preço</label>
                        <input 
                            type="text"
                            id="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                         />
                    </div>
                    <div>
                        <label htmlFor="category">Categoria</label>
                        <select 
                            name="category" 
                            id="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option disabled value="">Selecione uma Categoria</option>
                            <option value="Jogos">Jogos</option>
                            <option value="Livros">Livros</option>
                            <option value="Mangás">Mangás</option>
                        </select>
                    </div>
                </div>
                <label htmlFor="description">Descrição</label>
                <textarea 
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                >                   
                </textarea>
                <button type="submit"  className="button">Salvar</button>
            </form>
        </>
    )
}