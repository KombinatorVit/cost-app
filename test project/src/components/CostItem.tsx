import './CostItem.css';
import React, {FC} from "react";

type CostItemPropsType = {
    date: Date
    description: string
    sum: number
}

const CostItem: FC<CostItemPropsType> = ({date, description, sum}) => {
    const mount = date.toLocaleString('ru-RU', {month: 'long'})
    const year = date.getFullYear()
    const day = date.toLocaleString('ru-RU', {day: '2-digit'})


    return (
        <div className='cost-item'>
            <div>
                <div>{mount}</div>
                <div>{year}</div>
                <div>{day}</div>
            </div>
            <div className='cost-item__description'>
                <h2>{description}</h2>
                <div className={'cost-item__price'}>{sum}</div>
            </div>

        </div>
    );
};

export default CostItem;