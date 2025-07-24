import {type FC} from 'react';

interface props {
    format: 'primary' | 'outlined',
    children: string,
    className: string
}

const MainButton: FC<props> = ({className, format, children}) => {
    return (
        <button className={className + ' button ' + format}>
            {children}
        </button>
    );
};

export default MainButton;