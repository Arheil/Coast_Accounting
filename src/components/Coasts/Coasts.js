import './Coasts.css';
import CoastFilter from "./CoastFilter/CoastFilter";
import React, { useState } from "react";
import CostList from "./CostList/CostList";
import CostsDiagram from "./CostsDiagram";


const Coasts = ({ initial }) => {

    const [selectedYear, setSelectedYear] = useState('2022');

    const yearChangeHandler = (year) => {
        setSelectedYear(year);
    }

    const filteredCoasts = initial.filter(cost => {
        return cost.date.getFullYear().toString() === selectedYear;
    })



    return (
            <div className='costs'>
                <CoastFilter
                    year={selectedYear}
                    onChangeYear={yearChangeHandler}
                />
                <CostsDiagram costs={filteredCoasts} />
                <CostList costs={filteredCoasts} />
            </div>
    )
}

export default Coasts;