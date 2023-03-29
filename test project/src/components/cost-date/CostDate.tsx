import React, {FC} from 'react';
import './CostDate.scss'

type CostDatePropsType = {
    date: Date
}

const CostDate: FC<CostDatePropsType> = ({date}) => {
    const mount = date.toLocaleString('ru-RU', {month: 'long'})
    const year = date.getFullYear()
    const day = date.toLocaleString('ru-RU', {day: '2-digit'})

    return (
        <div className={'cost-date'}>
            <div className={'cost-date__month'}>{mount}</div>
            <div className={'cost-date__year'}>{year}</div>
            <div className={'.cost-date__day '}>{day}</div>
        </div>
    );
};

export default CostDate;