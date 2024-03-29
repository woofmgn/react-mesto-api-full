import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

interface EditProfilePopupProps {
  isOpen: boolean;
  onClose: () => void;
  onUpdateUser: (userInfo: { name: string; about: string }) => void;
  buttonLoading: boolean;
}

const EditProfilePopup: React.FC<EditProfilePopupProps> = ({
  isOpen,
  onClose,
  onUpdateUser,
  buttonLoading,
}) => {
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleChangeName = (evt: ChangeEvent<HTMLInputElement>) => {
    setName(evt.target.value);
  };

  const handleChangeDescription = (evt: ChangeEvent<HTMLInputElement>) => {
    setDescription(evt.target.value);
  };

  const handleSubmit = (evt: ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();
    onUpdateUser({
      name: name,
      about: description,
    });
  };

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  return (
    <PopupWithForm
      title={"Редактировать профиль"}
      name={"profile"}
      buttonText={"Сохранить"}
      buttonTextLoader={"Сохранение"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonLoading={buttonLoading}
    >
      <input
        className="popup__form-item popup__form-item_type_name"
        id="input-name"
        type="text"
        name="formName"
        placeholder="Имя"
        required
        minLength={2}
        maxLength={40}
        value={name || ""}
        onChange={handleChangeName}
      />
      <span className="popup__input-error input-name-error"></span>
      <input
        className="popup__form-item  popup__form-item_type_job"
        id="input-job"
        type="text"
        name="formJob"
        placeholder="Сфера деятельности"
        required
        minLength={2}
        maxLength={200}
        value={description || ""}
        onChange={handleChangeDescription}
      />
      <span className="popup__input-error input-job-error"></span>
    </PopupWithForm>
  );
};
export default EditProfilePopup;
