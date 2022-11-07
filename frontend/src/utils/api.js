import { settingsApi } from "../utils/utils";

class Api {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
    this._token = localStorage.getItem("token");
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  getInitialCards() {
    this._token = localStorage.getItem("token");
    return fetch(`${this._url}/cards`, {
      headers: {
        "Accept": 'application/json',
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this._token}`
      },
    }).then(this._getResponseData);
  }

  getUserProfile() {
    this._token = localStorage.getItem("token");
    return fetch(`${this._url}/users/me`, {
      headers: {
        "Accept": 'application/json',
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this._token}`
      },
    }).then(this._getResponseData);
  }

  setUserProfile(data) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: {
        "Accept": 'application/json',
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this._token}`
      },
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    }).then(this._getResponseData);
  }

  addNewCard(name, link) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: {
        "Accept": 'application/json',
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this._token}`
      },
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    }).then(this._getResponseData);
  }

  delCard(cardId, isOwner) {
    return isOwner
      ? fetch(`${this._url}/cards/${cardId}`, {
          method: "DELETE",
          headers: {
            "Accept": 'application/json',
            "Content-Type": "application/json",
            "Authorization": `Bearer ${this._token}`
          },
        }).then(this._getResponseData)
      : null;
  }

  _addLikeCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: {
        "Accept": 'application/json',
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this._token}`
      },
    }).then(this._getResponseData);
  }

  _delLikeCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: {
        "Accept": 'application/json',
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this._token}`
      },
    }).then(this._getResponseData);
  }

  changeLikeCardStatus(id, isLiked) {
    return isLiked ? this._addLikeCard(id) : this._delLikeCard(id);
  }

  setUserAvatar(data) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        "Accept": 'application/json',
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this._token}`
      },
      body: JSON.stringify({
        avatar: data,
      }),
    }).then(this._getResponseData);
  }
}

const api = new Api(settingsApi);
export default api;
