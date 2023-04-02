export class Section {
  constructor({ renderer }, container, api) {
    this._сontainer = container;
    this._renderer = renderer;
    this._api = api;
  }

  rendererAllElements() {
    const cards = this._api.getInitialCards();
    cards.then((result) => {
      result.forEach((itemData) => {
        this._renderer({ itemData: itemData });
      });
    });
  }
  addItem(element) {
    this._сontainer.prepend(element);
  }
}
