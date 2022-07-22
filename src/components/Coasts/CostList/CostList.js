import CostItem from "../../CoastItem/CostItem";
import React from "react";
import './CostList.css';

const CostList = ({ costs }) => {

    if (costs.length === 0) {
        return <h2 className='cost-list__fallback'>В этом году Расходов нет</h2>
    }

    return <ul className='cost-list'>
        {costs.map(item =>
        <CostItem
            key={item.id}
            date={item.date}
            name={item.description}
            price={item.amount}/>
        )}
    </ul>
}

export default CostList;