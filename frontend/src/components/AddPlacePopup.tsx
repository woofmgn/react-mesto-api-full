import React, { ChangeEvent, useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";

interface IAddPlacePopupProps {
  isOpen: boolean;
  onClose: () => void;
  onAddPlace: (cardTitle: string, cardLink: string) => void;
  buttonLoading: boolean;
}

const AddPlacePopup: React.FC<IAddPlacePopupProps> = ({
  isOpen,
  onClose,
  onAddPlace,
  buttonLoading,
}) => {
  const [newCardLink, setNewCardLink] = useState("");
  const [newCardTitle, setNewCardTitle] = useState("");

  const handleSubmit = (evt: { preventDefault: () => void }) => {
    evt.preventDefault();
    onAddPlace(newCardTitle, newCardLink);
  };

  const handleChangeLink = (evt: ChangeEvent<HTMLInputElement>) => {
    setNewCardLink(evt.target.value);
  };

  const handleChangeTitle = (evt: ChangeEvent<HTMLInputElement>) => {
    setNewCardTitle(evt.target.value);
  };

  useEffect(() => {
    if (isOpen) {
      setNewCardLink("");
      setNewCardTitle("");
    }
  }, [isOpen]);

  return (
    <PopupWithForm
      title={"Новое место"}
      name={"cards"}
      buttonText={"Сохранить"}
      buttonTextLoader={"Сохранение"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonLoading={buttonLoading}
    >
      <input
        className="popup__form-item popup__form-item_type_place"
        id="input-place"
        type="text"
        name="name"
        placeholder="Название"
        required
        minLength={2}
        maxLength={30}
        onChange={handleChangeTitle}
        value={newCardTitle || ""}
      />
      <span className="popup__input-error input-place-error"></span>
      <input
        className="popup__form-item  popup__form-item_type_link"
        id="input-link"
        type="url"
        name="link"
        placeholder="Ссылка на картинку"
        required
        onChange={handleChangeLink}
        value={newCardLink || ""}
      />
      <span className="popup__input-error input-link-error"></span>
    </PopupWithForm>
  );
};

export default AddPlacePopup;
