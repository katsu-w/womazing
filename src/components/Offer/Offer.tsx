import {type FC} from 'react';
import MainButton from "../UI/MainButton/MainButton.tsx";
import './Offer.scss';

const Offer: FC = () => {
    return (
        <article className="offer container">
            <div className="offer__content">
                <div className="offer__content-inner">
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
	              <div className="slider-controls">
		              <span></span>
		              <span className="active"></span>
		              <span></span>
	              </div>
            </div>
	          <div className="slider">
		          <img
			          src="/slider-main-photo.jpg"
			          alt=""
			          width="410"
			          height="646"
			          loading="lazy"
		          />
	          </div>
        </article>
    );
};

export default Offer;