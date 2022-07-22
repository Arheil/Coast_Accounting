import React, { useState } from "react";
import CoastForm from "./CoastForm/CoastForm";
import './NewCoast.css';


const NewCoast = (props) => {

   const [isformVisible, setIsFormVisible] = useState(false);

   const inputCostDataHandler = () => {
       setIsFormVisible(true);
   }

   const cancelCostDataHandler = () => {
       setIsFormVisible(false);
   }

    const saveCoastDataHandler = (inputCoastData) => {
        const costData ={
            ...inputCoastData,
            id: Math.random().toString()
        }
        props.onAddCoast(costData);
        setIsFormVisible(false);
    };

    return (
        <div className='new-cost'>
            {!isformVisible && <button onClick={inputCostDataHandler}>Добавить новый Расход</button>}
            {isformVisible && <CoastForm onCancel={cancelCostDataHandler} onSaveCoastData={saveCoastDataHandler} />}
        </div>
    )
}

export default NewCoast;