import React, {ChangeEvent, FC, FormEvent, useState} from 'react';
import './CostForm.scss'
import {DataType} from "../../App";

type CostFormPropsType = {
    addNewCost: (newCost: DataType) => void
}
const CostForm: FC<CostFormPropsType> = ({addNewCost}) => {


    const [inputValue, setInputValue] = useState({name: '', amount: 0, date: ''})
    const [openFormInput, setOpenFormInput] = useState(false)
    const nameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue((prev) => {
            return {...prev, name: event.target.value}
        })

    }
    const amountChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue((prev) => {
            return {...prev, amount: +event.target.value}
        })
    }


    const dateChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(
            (prev) => {
                return {...prev, date: event.target.value}
            }
        )
    }
    const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const costData = {
            name: inputValue.name,
            amount: inputValue.amount,
            date: new Date(inputValue.date)
        }
        console.log(costData)
        addNewCost(costData)
        setInputValue({name: '', amount: 0, date: ''})
        setOpenFormInput(false)
    }
    const onClickResetHandler = () => {
        setInputValue({name: '', amount: 0, date: ''})
    }

    return (
        <form onSubmit={onSubmitHandler}>
            {!openFormInput && <button onClick={() => setOpenFormInput(true)}> ON input add Form</button>}
            {
                openFormInput && <div className='new-cost__controls'>
                    <div className="new-cost__control">
                        <label> Name</label>
                        <input type="text" onChange={nameChangeHandler} value={inputValue.name}/>
                    </div>
                    <div className="new-cost__control">
                        <label> Sum</label>
                        <input type="number" min='0.01' step='0.01' onChange={amountChangeHandler}
                               value={inputValue.amount}/>
                    </div>

                    <div className="new-cost__control">
                        <label> Date</label>
                        <input type="date" min={'2021-01-01'} max={'2023-12-31'} onChange={dateChangeHandler}
                               value={inputValue.date}
                        />

                    </div>


                    <div className='new-cost__actions'>
                        <button type={"submit"}>ADD COST</button>
                        <button onReset={onClickResetHandler}> Cancel</button>

                    </div>

                </div>
            }

        </form>

    );
};

export default CostForm;