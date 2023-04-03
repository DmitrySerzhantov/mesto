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

  setUserInfo(nameInput, infoInput) {
    this._name.textContent = nameInput;
    this._info.textContent = infoInput;
  }
  setUserAvatar(avatarSrc) {
    this._avatar.src = avatarSrc;
  }
}
