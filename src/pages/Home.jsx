import { useEffect } from "react";
import ButtonWhite from "../components/Buttons/ButtonWhite";
import Cards from "../components/Cards";
import MainTitle from "../components/MainTitle";
import useItem from "../hooks/useItem";
import { useState } from "react";

export default function Home(){
    const { items } = useItem();
    const [itemsLast10Days, setItemsLast10Days] = useState([]);

    const calculateInventary = () => {
        let totalQuantity = 0;
        items.forEach(item => {
            totalQuantity += Number(item.quantity);
        });
        return totalQuantity;
    };

    const itemsRunningOut = () => {
        let quantityItemsRunningOut = 0;
        items.forEach(item => {
            if(item.quantity < 10){
                quantityItemsRunningOut++;
            }
        });
        return quantityItemsRunningOut;
    };

    useEffect(() => {
        const currentDate = new Date();
        const tenDaysAgo = new Date(currentDate);
        tenDaysAgo.setDate(tenDaysAgo.getDate() - 10);
        const itemsAddedLast10Days = items.filter(item => new Date(item.date) >= tenDaysAgo);
        const sortedItemsLast10Days = itemsAddedLast10Days.sort((a, b) => new Date(b.date) - new Date(a.date));
        setItemsLast10Days(sortedItemsLast10Days);
    }, [items]);

    return(
        <>
            <MainTitle title="Dashboard"/>
            <section className="cardsSection">
                <Cards 
                    title="Diversidade de Itens"
                    number={items.length}
                />
                <Cards 
                    title="Inventário Total"
                    number={calculateInventary()}
                />
                <Cards 
                    title="Itens Recentes"
                    number={itemsLast10Days.length}
                />
                <Cards 
                    title="Itens Acabando"
                    number={itemsRunningOut()}
                />
            </section>
            <section className="productsTables">
                {itemsLast10Days.length > 0 ? 
                    <div className="tableContainer">
                        <table>
                        <thead>
                            <tr>
                                <td>Itens recentes</td>
                                <td>Acões</td>
                            </tr>
                        </thead>
                            <tbody>
                                {itemsLast10Days.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.name}</td>
                                        <td>
                                            <ButtonWhite
                                                className="button"
                                                text="Ver"
                                                link={`/items/${item.id}`}
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                : <p className="productTableWarning">Nenhum produto adicionado nos últimos 10 dias.</p>}
                {itemsRunningOut() > 0 ? 
                    <div className="tableContainer">
                        <table>
                            <thead>
                                <tr>
                                    <td>Itens acabando</td>
                                    <td>Qtd.</td>
                                    <td>Acões</td>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item) => (
                                    item.quantity < 10 ? (
                                        <tr key={item.id}>
                                            <td>{item.name}</td>
                                            <td>{item.quantity}</td>
                                            <td>
                                                <ButtonWhite 
                                                    className="button"
                                                    text="Ver"
                                                    link={`/items/${item.id}`}
                                                />
                                            </td>
                                        </tr>
                                    ) : null
                                ))}
                            </tbody>
                        </table>
                    </div>
                : <p className="productTableWarning">Ainda não há nenhum produto com estoque abaixo de 10 itens</p>}
            </section>
        </>
    )
}

