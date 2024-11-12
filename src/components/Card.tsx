import {FC} from "react";
import {Card as CardModel} from '~/models'

export const Card:FC<{card: CardModel, index: number}> = ({card, index}) => {



	return <div className={`card ${card.color}`}>
		{card.hasArrow && <img src="arrow.svg" alt="arrow" className="card__arrow"/>}
		{card.hasArrow && <img src="arrow-mobile.svg" alt="arrow" className="card__arrow__mobile"/>}
		<div className="card__wrapper ">
			<div className="card__header">
				<div className={`card__number ${card.color}`}>
					<div className="card__number__content">{index + 1}</div>
				</div>
				<h1 className="card__title">{card.title}</h1>
			</div>
		</div>
		<div className="card__hero__wrapper">
			<img className={'card__hero'} src={card.hero} alt=""/>
		</div>
	</div>
}