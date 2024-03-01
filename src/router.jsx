import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import Items from "./pages/Items";
import Item from "./pages/Item";
import NewItem from "./pages/NewItem";
import UpdateItem from "./pages/UpdateItem";


const router = createBrowserRouter([
    {
        path: "/", 
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/items",
                element: <Items/>,
            }, 
            {
                path: "/items/:itemId",
                element: <Item />
            },
            {
                path: "/novo-item",
                element: <NewItem />
            },
            {
                path: "/items/atualizar-item/:itemId", 
                element: <UpdateItem />
            }
        ]
    }
])

export default router