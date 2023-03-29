import Costs from "./components/costs/Costs";
import NewCost from "./components/new-cost/NewCost";
import {useState} from "react";
import CostsFilter from "./components/costs/cost-filter/CostFilter";

export  type DataType = {
    date: Date
    name: string
    amount: number
}


export function App() {
    const [data, setData] = useState<DataType[]>([
        {
            date: new Date(2023, 2, 29),
            name: 'Refrigerator',
            amount: 9999
        },
        {
            date: new Date(2023, 2, 29),
            name: 'Bus',
            amount: 7500
        }, {
            date: new Date(2023, 2, 29),
            name: 'Car',
            amount: 2134
        }
    ])

    const addNewCost = (newCost: DataType) => {
        setData([newCost, ...data])
    }

    return (
        <div>
            <NewCost addNewCost={addNewCost}/>
            <Costs data={data}/>

        </div>
    )
}
