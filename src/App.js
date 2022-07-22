import React, { useState } from "react";
import './components/CoastItem/CoastItem.css';
import NewCoast from "./components/NewCoast/NewCoast";
import Coasts from "./components/Coasts/Coasts";


const INITIAL_COSTS = [
    {
        id: "c1",
        date: new Date(2020, 2, 12),
        description: "Холодильник",
        amount: 999.99,
    },
    {
        id: "c2",
        date: new Date(2021, 11, 25),
        description: "MacBook",
        amount: 1254.72,
    },
    {
        id: "c3",
        date: new Date(2021, 3, 1),
        description: "Джинсы",
        amount: 49.99,
    },
];

function App() {

    const [ costs, setCoasts ] = useState(INITIAL_COSTS);

    const addCoastHandler = (cost) => {
        setCoasts(prevCosts => {
            return [ cost, ...prevCosts ];
        });
        console.log(cost);
    }

    return (
        <>
                <NewCoast onAddCoast={addCoastHandler} />
                <Coasts initial={costs} />
        </>
    );
}

export default App;
