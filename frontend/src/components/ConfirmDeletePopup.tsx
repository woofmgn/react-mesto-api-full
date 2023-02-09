import React, { ChangeEvent } from "react";
import { ICards } from "./App";
import PopupWithForm from "./PopupWithForm";

interface IConfirmDeletePopupProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCard: ICards;
  setSelectedCard: (card: ICards) => void;
  handleCardDeleteConfirm: (cards: ICards) => void;
  buttonLoading: boolean;
}

const ConfirmDeletePopup: React.FC<IConfirmDeletePopupProps> = ({
  isOpen,
  onClose,
  selectedCard,
  setSelectedCard,
  handleCardDeleteConfirm,
  buttonLoading,
}) => {
  const handleDeleteClick = (evt: ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();
    handleCardDeleteConfirm(selectedCard);
    setSelectedCard({} as ICards);
  };

  return (
    <PopupWithForm
      title={"Вы уверены?"}
      name={"delete"}
      buttonText={"Удалить"}
      buttonTextLoader={"Удаление"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleDeleteClick}
      buttonLoading={buttonLoading}
      children={undefined}
    />
  );
};

export default ConfirmDeletePopup;
