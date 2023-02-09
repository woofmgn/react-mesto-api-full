import React, { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { ICards } from "./App";

interface ICardProps {
  card: ICards;
  onCardClick: (card: ICards) => void;
  onCardLike: (card: ICards) => void;
  onCardDelete: (card: ICards) => void;
}

const Card: React.FC<ICardProps> = ({
  card,
  onCardClick,
  onCardLike,
  onCardDelete,
}) => {
  const currentUser = useContext(CurrentUserContext);

  const isOwn = card.owner === currentUser._id;
  const cardDeleteButtonClassName = `element__trash-button ${
    isOwn ? "element__trash-button_active" : ""
  }`;
  const isLiked = card.likes.some((i) => i === currentUser._id);
  const cardLikeButtonClassName = `element__like-button ${
    isLiked ? "element__like-button_active" : ""
  }`;

  const handleClick = () => {
    onCardClick(card);
  };

  const handleLikeClick = () => {
    onCardLike(card);
  };

  const handleDeleteClick = () => {
    onCardDelete(card);
  };

  return (
    <li className="element__item">
      <img
        className="element__image"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      <button
        className={cardDeleteButtonClassName}
        type="button"
        onClick={handleDeleteClick}
      />
      <div className="element__info">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__like-container">
          <button
            className={cardLikeButtonClassName}
            type="button"
            onClick={handleLikeClick}
          />
          <p className="element__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
};

export default Card;
