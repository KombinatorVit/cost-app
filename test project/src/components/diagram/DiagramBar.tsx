import React, {FC} from 'react';
import './DiagramBar.scss'

type DiagramBarPropsType = {
    value: number
    maxValue: number
    label: string

}

const DiagramBar: FC<DiagramBarPropsType> = ({label, maxValue, value}) => {

    let barFillHeight = '0%'
    if (maxValue && maxValue > 0) {
        barFillHeight = Math.round(value / maxValue * 100) + '%'
    }

    return (
        <div className={'diagram-bar'}>
            <div className={'diagram-bar__inner'}>

                <div className={'diagram-bar__fill'} style={{
                    height: barFillHeight
                }}></div>
            </div>
            <div className={'diagram-bar__label'}>{label}</div>

        </div>
    );
};

export default DiagramBar;