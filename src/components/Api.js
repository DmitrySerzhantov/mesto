export class Api {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
  }

  getInitialCards() {
    return fetch(this._url + "cards", {
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject("Произошла ошибка");
    });
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
      return res.json();
    });
  }

  getUserProfile() {
    return fetch(this._url + "users/me", {
      headers: this._headers,
    }).then((res) => {
      return res.json();
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
      return res.json();
    });
  }
  deleteCard(id) {
    return fetch(`${this._url}cards/${id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => {
      return res.json();
    });
  }

  likeCard(id) {
    return fetch(`${this._url}cards/${id}/likes`, {
      method: "PUT",
      headers: this._headers,
    }).then((res) => {
      return res.json();
    });
  }
  deleteLikeCard(id) {
    return fetch(`${this._url}cards/${id}/likes`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => {
      return res.json();
    });
  }
  updatesAvatar(data) {
    return fetch(this._url + "users/me/avatar", {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    }).then((res) => {
      return res.json();
    });
  }
}
