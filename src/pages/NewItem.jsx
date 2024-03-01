import { useState } from "react";
import MainTitle from "../components/MainTitle";
import StockNavbar from "../components/StockNavbar";
import useItem from "../hooks/useItem";


export default function NewItem(){
    const { addItem } = useItem();
    const [name, setName] = useState("")
    const [quantity, setQuantity] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")


    function handleSubmit(ev){
        ev.preventDefault()
        addItem({name, quantity, price, description, category})
        setName("")
        setQuantity("")
        setPrice("")
        setCategory("")
        setDescription("")
        alert(`O item ${name} foi cadastrado com sucesso!`)
    }
    return(
        <>
            <MainTitle title= "Stock Items" />
            <StockNavbar className="secoundButtonActive" />
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