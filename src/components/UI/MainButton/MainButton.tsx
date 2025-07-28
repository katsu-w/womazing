import {type FC} from 'react';
import classes from './MainButton.module.scss';

interface props {
    format: 'primary' | 'outlined',
    children: string,
    className: string
}

const MainButton: FC<props> = ({children}) => {
    return (
        <button className={classes.button}>
            {children}
        </button>
    );
};

export default MainButton;