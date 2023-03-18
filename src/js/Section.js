export class Section {
  constructor({ items, renderer }, selectorContainer) {
    this._selectorContainer = selectorContainer;
    this._renderer = renderer;
    this._items = items;
  }
  rendererAllElements() {
    this._items.forEach((itemData) => {
      this._renderer(itemData);
    });
  }

  addItem(element) {
    this._selectorContainer.prepend(element);
  }
}
