import { authUrl } from "../utils/utils";

class Auth {
  constructor(options) {
    this._url = options.url;
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  register(email, password) {
    return fetch(`${authUrl}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        origin: 'http://vden.mesto.nomoredomains.icu',
      },
      body: JSON.stringify({ email, password }),
    }).then(this._getResponseData);
  }

  login(email, password) {
    return fetch(`${authUrl}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        origin: 'http://vden.mesto.nomoredomains.icu',
      },
      body: JSON.stringify({ email, password }),
    }).then(this._getResponseData);
  }

  checkToken(jwt) {
    return fetch(`${authUrl}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
        origin: 'http://vden.mesto.nomoredomains.icu',
      },
    }).then(this._getResponseData);
  }
}

const auth = new Auth(authUrl);
export default auth;
