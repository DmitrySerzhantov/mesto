export class UserInfo {
  constructor({ name, info, avatar }) {
    this._name = name;
    this._info = info;
    this._avatar = avatar;
  }

  getUserInfo() {
    const userInfo = {
      name: this._name.textContent,
      info: this._info.textContent,
    };

    return userInfo;
  }

  setUserInfo(data) {
    this._name.textContent = data.name;
    this._info.textContent = data.about;
  }
  setUserAvatar(avatarSrc) {
    this._avatar.src = avatarSrc;
  }
}
