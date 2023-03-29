import CostItem from "./components/CostItem";

export function App() {

    type DataType = {
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

    return (
        <div className="App">
            {data.map((el, i) => {
                return <>
                    <CostItem key={i} date={el.date} description={el.description} sum={el.sum}/>
                </>

            })}

        </div>
    )
}
