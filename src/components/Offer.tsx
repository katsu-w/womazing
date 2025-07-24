import {type FC} from 'react';
import MainButton from "./UI/MainButton.tsx";

const Offer: FC = () => {
    return (
        <article>
            <div className="offer">
                <h1 className="offer__heading">
                    Новые поступления в этом сезоне
                </h1>
                <p className="offer__description">
                    Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.
                </p>
                <div className="offer__buttons">
                    <button className="arrow-button offer__button">
                        <img src="/src/assets/arrow-button.svg" alt="Go to magazine"/>
                    </button>
                    <MainButton format='primary' className="offer__button">
                        Открыть магазин
                    </MainButton>
                </div>
            </div>
        </article>
    );
};

export default Offer;