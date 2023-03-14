export class Section {
  constructor ({items, renderer}, selectorContainer) {
this.selectorContainer = selectorContainer;

  }
  rendererAllElements () {
    renderer();
  };

  addItem(element) {
    this.selectorContainer.append(element)
  };

}
