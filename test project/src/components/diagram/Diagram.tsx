import React, {FC} from 'react';
import './Diagram.scss'
import DiagramBar from "./DiagramBar";
import {DiagramDataSetType} from "../costs/CostsDiagram";


type DiagramPropsType = {
    data: DiagramDataSetType[]
}

const Diagram: FC<DiagramPropsType> = ({data}) => {


    const dataSetValue = data.map(el => el.value)
    const maxMonthCost = Math.max(...dataSetValue)


    return (
        <div className={'diagram'}>
            {data.map(dataSet => {
                return (
                    <React.Fragment key={dataSet.label}>
                        <DiagramBar value={dataSet.value} maxValue={maxMonthCost} label={dataSet.label}/>
                    </React.Fragment>
                )
            })}
        </div>
    );
};

export default Diagram;