export class Section {
  constructor({ items, renderer }, container) {
    this._container = container;
    this._renderer = renderer;
    this._items = items;
  }
  rendererAllElements() {
    this._items.reverse().forEach((itemData) => {
      this._renderer(itemData);
    });
  }

  addItem(element) {
    this._container.prepend(element);
  }
}
