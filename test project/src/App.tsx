import Costs from "./components/costs/Costs";

export  type DataType = {
    date: Date
    description: string
    sum: number
}

const data: DataType[] = [
    {
        date: new Date(2023, 2, 29),
        description: 'Refrigerator',
        sum: 9999
    },
    {
        date: new Date(2023, 2, 29),
        description: 'Bus',
        sum: 7500
    }, {
        date: new Date(2023, 2, 29),
        description: 'Car',
        sum: 2134
    }
]

export function App() {

    return (
        <div>
            <Costs data={data}/>

        </div>
    )
}
