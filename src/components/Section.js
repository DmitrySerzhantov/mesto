export class Section {
  constructor({ items, renderer }, container) {
    this._сontainer = container;
    this._renderer = renderer;
    this._items = items;
  }
  rendererAllElements() {
    this._items.forEach((itemData) => {
      this._renderer(itemData);
    });
  }

  addItem(element) {
    this._сontainer.prepend(element);
  }
}
