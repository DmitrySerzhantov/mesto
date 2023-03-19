export class UserInfo {
  constructor({ name, info }) {
    this._name = name;
    this._info = info;
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
}
