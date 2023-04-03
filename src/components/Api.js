export class Api {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
  }

  getInitialCards() {
    return fetch(this._url + "cards", {
      headers: this._headers,
    }).then((res) => {
      return this._checkStatus(res);
    });
  }

  _checkStatus(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  setInitialNewCard(data) {
    return fetch(this._url + "cards", {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    }).then((res) => {
      return this._checkStatus(res);
    });
  }

  getUserProfile() {
    return fetch(this._url + "users/me", {
      headers: this._headers,
    }).then((res) => {
      return this._checkStatus(res);
    });
  }
  setUserProfile(data) {
    return fetch(this._url + "users/me", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    }).then((res) => {
      return this._checkStatus(res);
    });
  }
  deleteCard(id) {
    return fetch(`${this._url}cards/${id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => {
      return this._checkStatus(res);
    });
  }

  likeCard(id) {
    return fetch(`${this._url}cards/${id}/likes`, {
      method: "PUT",
      headers: this._headers,
    }).then((res) => {
      return this._checkStatus(res);
    });
  }
  deleteLikeCard(id) {
    return fetch(`${this._url}cards/${id}/likes`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => {
      return this._checkStatus(res);
    });
  }
  updateAvatar(data) {
    return fetch(this._url + "users/me/avatar", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    }).then((res) => {
      return this._checkStatus(res);
    });
  }
}
