import React, { ChangeEvent, useEffect, useRef } from "react";
import PopupWithForm from "./PopupWithForm";

interface IEditAvatarPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onUpdateAvatar: (avatarInfo: string) => void;
  buttonLoading: boolean;
}

const EditAvatarPopup: React.FC<IEditAvatarPopupProps> = ({
  isOpen,
  onClose,
  onUpdateAvatar,
  buttonLoading,
}) => {
  const avatarRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (evt: ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();
    if (avatarRef.current === null) {
      throw new Error(`Input with ID attribute not found`);
    }
    onUpdateAvatar(avatarRef.current.value);
  };

  useEffect(() => {
    if (isOpen && avatarRef.current !== null) {
      avatarRef.current.value = "";
    }
  }, [isOpen]);

  return (
    <PopupWithForm
      title={"Обновить аватар"}
      name={"avatar"}
      buttonText={"Изменить"}
      buttonTextLoader={"Изменение"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonLoading={buttonLoading}
    >
      <input
        className="popup__form-item popup__form-item_type_avatar"
        id="input-avatar"
        type="url"
        name="link"
        ref={avatarRef}
        placeholder="Ссылка на картинку"
        required
      />
      <span className="popup__input-error input-avatar-error"></span>
    </PopupWithForm>
  );
};

export default EditAvatarPopup;
