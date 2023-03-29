import './CostItem.scss';
import React, {FC} from "react";
import CostDate from "../cost-date/CostDate";
import Card from "../UI/card/Card";

type CostItemPropsType = {
    date: Date
    name: string
    amount: number
}

const CostItem: FC<CostItemPropsType> = ({date, name, amount}) => {


    return (
        <Card className='cost-item'>
            <CostDate date={date}/>
            <div className='cost-item__description'>
                <h2>{name}</h2>
                <div className={'cost-item__price'}>{amount} $</div>
            </div>

        </Card>
    );
};

export default CostItem;