import { createBrowserRouter } from "react-router-dom";
import CardList from "../pages/CardList";
import AddCard from "../pages/AddCard";


const router = createBrowserRouter([
    {
        path: '/',
        element: <CardList />,
    },
    {
        path: '/addCard',
        element: <AddCard />,
    },
]);

export default router;