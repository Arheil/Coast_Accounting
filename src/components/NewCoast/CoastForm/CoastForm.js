import React, { useState } from "react";
import './CoastForm.css';

const CoastForm = (props) => {

    const [inputName, setInputName] = useState('');
    const [inputAmount, setInputAmount] = useState('');
    const [inputDate, setInputDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     name:'',
    //     amount:'',
    //     date:'',
    // })

    const nameChangeHandler = (event) => {
        setInputName(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     name: event.target.value
        // })

        // Данный способ предпочтительней, когда есть зависимость от предыдущего состояния
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         name: event.target.value
        //     }
        // })
    }

    const amountChangeHandler = (event) => {
        setInputAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     amount: event.target.value
        // })
    }

    const dateChangeHandler = (event) => {
        setInputDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     date: event.target.value
        // })
    }

    const submitHandler = (event) => {
        event.preventDefault()

        const costData = {
            description: inputName,
            amount: +inputAmount,
            date: new Date(inputDate),
        }

        props.onSaveCoastData(costData)

        setInputName('')
        setInputAmount('')
        setInputDate('')

    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-cost__controls'>
                <div className='new-cost__control'>
                    <label htmlFor="">Название</label>
                    <input type="text" value={inputName} onChange={nameChangeHandler}/>
                </div>
                <div className='new-cost__control'>
                    <label htmlFor="">Сумма</label>
                    <input type="number" value={inputAmount} onChange={amountChangeHandler} min='0.01' step='0.01'/>
                </div>
                <div className='new-cost__control'>
                    <label htmlFor="">Дата</label>
                    <input type="date" value={inputDate} onChange={dateChangeHandler} min='2021-01-01' step='2030-12-31'/>
                </div>
                <div className='new-cost__actions'>
                    <button type='submit'>Добавить расход</button>
                    <button type='button' onClick={props.onCancel}>Отмена</button>
                </div>
            </div>
        </form>

    )
}

export default CoastForm;