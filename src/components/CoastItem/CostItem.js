import CoastDate from "./CoastDate/CoastDate";
import './CoastItem.css';

function CostItem({ date, name, price }) {

    return (
        <div className='cost-item'>
            <CoastDate date={ date } />
            <div className='cost-item__description'>
                <h2>{ name }</h2>
                <div className='cost-item__price'>${ price }</div>
            </div>
        </div>
    );
}

export default CostItem;