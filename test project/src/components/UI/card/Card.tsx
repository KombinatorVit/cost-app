import React, {FC, ReactNode} from 'react';
import './Card.scss'

type CardPropsType = {
    children: ReactNode
    className: string
}
const Card: FC<CardPropsType> = ({children, className}) => {
    const classes = `card ${className}`
    return (
        <div className={classes}>
            {children}
        </div>
    );
};

export default Card;