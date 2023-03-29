import React, {FC} from 'react';
import './CostList.scss'
import CostItem from "../../cost-item/CostItem";
import {DataType} from "../../../App";

type CostListPropsType = {
    filteredData: DataType[]
}

const CostList: FC<CostListPropsType> = ({filteredData}) => {

    if(filteredData.length === 0){
        return <h2 className={'cost-list__fallback'}>Нет данных за выбранную дату</h2>
    }

    return (
        <ul className={'cost-list'}>
            {filteredData.map((el,) => {
                return <li key={el.amount} >
                    <CostItem date={el.date} name={el.name} amount={el.amount}/>
                </li>

            })}
        </ul>
    );
};

export default CostList;