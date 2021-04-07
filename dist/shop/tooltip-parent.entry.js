import { r as registerInstance, h, e as Host } from './index-169abfef.js';

const CryptoView = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, { class: 'hello' }, h("div", null, console.log(this), h("component-one", { color: this.color }), h("component-two", { color: this.color }))));
  }
};

export { CryptoView as tooltip_parent };
