import { r as registerInstance, h, H as Host } from './index-8343f927.js';

const componentOneCss = ":host{display:block}";

const CryptoView$1 = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, { class: 'hello', style: { color: `${this.color}` } }, h("h1", null, "  I am a component one ", this.color, " ")));
  }
};
CryptoView$1.style = componentOneCss;

const CryptoView = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, { class: 'hello', style: { color: `${this.color}` } }, h("h2", null, "I am a component two ", this.color)));
  }
};

export { CryptoView$1 as component_one, CryptoView as component_two };
