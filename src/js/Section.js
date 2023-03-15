export class Section {
  constructor({ items, renderer }, selectorContainer) {
    this._selectorContainer = selectorContainer;
    this._renderer = renderer;
    this._items = items;
  }
  rendererAllElements() {
    this._renderer(this._selectorContainer, this._items);
  }

  addItem(element) {
    this._selectorContainer.prepend(element);
  }
}
