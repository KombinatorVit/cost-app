import React, {FC} from 'react';
import CostItem from "../cost-item/CostItem";
import {DataType} from "../../App";
import './Costs.scss'
import Card from "../card/Card";

type CostsPropsType = { data: DataType[] }
const Costs: FC<CostsPropsType> = ({data}) => {
    return (
        <Card className={'costs'}>
            {data.map((el,) => {
                return <React.Fragment key={el.sum}>
                    <CostItem date={el.date} description={el.description} sum={el.sum}/>
                </React.Fragment>

            })}
        </Card>
    );
};

export default Costs;