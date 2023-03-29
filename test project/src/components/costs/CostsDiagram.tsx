import React, {FC} from 'react';
import Diagram from "../diagram/Diagram";
import {DataType} from "../../App";

export type DiagramDataSetType = {
    label: any
    value: number
}

type CostsDiagramPropsType = {
    costs: DataType[]
}

const CostsDiagram: FC<CostsDiagramPropsType> = ({costs}) => {

    const diagramDataSets: DiagramDataSetType[] = [
        {label: "Jan", value: 0},
        {label: "Feb", value: 0},
        {label: "Mar", value: 0},
        {label: "Apr", value: 0},
        {label: "May", value: 0},
        {label: "Jun", value: 0},
        {label: "Jul", value: 0},
        {label: "Aug", value: 0},
        {label: "Sep", value: 0},
        {label: "Oct", value: 0},
        {label: "Nov", value: 0},
        {label: "Dec", value: 0},
    ];

    for (const cost of costs) {
        const costMonth = cost.date.getMonth()
        diagramDataSets[costMonth].value += (cost.amount);

    }
    return <Diagram data={diagramDataSets}/>
};

export default CostsDiagram;