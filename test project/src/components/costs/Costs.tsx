import React, {FC, useState} from 'react';
import CostItem from "../cost-item/CostItem";
import {DataType} from "../../App";
import './Costs.scss'
import Card from "../UI/card/Card";
import CostsFilter from "./cost-filter/CostFilter";
import CostList from "./cost-list/CostList";
import CostsDiagram from "./CostsDiagram";

type CostsPropsType = { data: DataType[] }
const Costs: FC<CostsPropsType> = ({data}) => {

    const [year, setYear] = useState('2021')

    const onChangeYear = (valueYear: string) => {
        setYear(valueYear)
        console.log(year)
    }
    const filteredData = data.filter(el => el.date.getFullYear().toString() === year)


    return (
        <div>

            <Card className={'costs'}>
                < CostsFilter year={year} onChangeYear={onChangeYear}/>
                <CostsDiagram costs={filteredData}/>
                <CostList filteredData={filteredData}/>
            </Card>
        </div>
    );
};

export default Costs;