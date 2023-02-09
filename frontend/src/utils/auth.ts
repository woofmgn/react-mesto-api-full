import { authUrl } from "./utils";


class Auth {
  private _url: string
  constructor(options: string) {
    this._url = options;
  }

  _getResponseData(res: Response) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  register(email: string, password: string) {
    return fetch(`${this._url}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

      },
      body: JSON.stringify({ email, password }),
    }).then(this._getResponseData);
  }

  login(email: string, password: string) {
    return fetch(`${this._url}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then(this._getResponseData);
  }

  checkToken(jwt: string | null) {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: {
        "Accept": 'application/json',
        "Content-Type": "application/json",
        "Authorization": `Bearer ${jwt}`,
      },
    }).then(this._getResponseData);
  }
}

const auth = new Auth(authUrl);
export default auth;
