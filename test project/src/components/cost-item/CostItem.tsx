import './CostItem.scss';
import React, {FC} from "react";
import CostDate from "../cost-date/CostDate";
import Card from "../card/Card";

type CostItemPropsType = {
    date: Date
    description: string
    sum: number
}

const CostItem: FC<CostItemPropsType> = ({date, description, sum}) => {


    return (
        <Card className='cost-item'>
            <CostDate date={date}/>
            <div className='cost-item__description'>
                <h2>{description}</h2>
                <div className={'cost-item__price'}>{sum} $</div>
            </div>

        </Card>
    );
};

export default CostItem;