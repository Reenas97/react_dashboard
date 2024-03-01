import { useState } from "react"

export default function useItem(){
    const [items, setItems] = useState(() =>{
        const storedItems = localStorage.getItem('obc-item-lib')
        if(!storedItems) return []
        const itemArray = JSON.parse(storedItems)
        return itemArray
    })
    function addItem({name, quantity, price, description, category}){
        const id = Math.floor(Math.random() * 1000000)
        const date = new Date()
        const formatedDate = new Date().toLocaleString()
        const item = {id, date, formatedDate, name, quantity, price, description, category}
        setItems(state=> {
            const newState = [...state, item]
            localStorage.setItem('obc-item-lib', JSON.stringify(newState))
            return newState
        })
    }

    function removeItem(id){
        setItems(state => {
            const newState = state.filter(item => item.id !== id)
            localStorage.setItem('obc-item-lib', JSON.stringify(newState))
            return newState
        })
    }

    function updateItem(updatedItem){
        setItems(state => {
            const index = state.findIndex(item => item.id === updatedItem.id);
            if (index === -1) {
                return state;
            }
            const newState = [...state];
            newState[index] = updatedItem;
            localStorage.setItem('obc-item-lib', JSON.stringify(newState));
            return newState;
        });
    }

    return {items, addItem, removeItem, updateItem}
}

