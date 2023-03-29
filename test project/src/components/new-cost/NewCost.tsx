import React, {FC} from 'react';
import './NewCost.scss'
import CostForm from "./CostForm";
import {DataType} from "../../App";

type NewCostPropsType = {
    addNewCost: (newCost: DataType) => void
}

const NewCost: FC<NewCostPropsType> = ({addNewCost}) => {
    return (
        <div className='new-cost'>
            <CostForm addNewCost={addNewCost}/>


        </div>
    );
};

export default NewCost;