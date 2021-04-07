import { r as registerInstance, h, e as Host } from './index-169abfef.js';

const componentOneCss = ":host{display:block}";

const CryptoView = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, { class: 'hello', style: { color: `${this.color}` } }, h("h1", null, "  I am a component one ", this.color, " ")));
  }
};
CryptoView.style = componentOneCss;

export { CryptoView as component_one };
