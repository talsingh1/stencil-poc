import { r as registerInstance, h, e as Host } from './index-169abfef.js';

const CryptoView = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, { class: 'hello', style: { color: `${this.color}` } }, h("h2", null, "I am a component two ", this.color)));
  }
};

export { CryptoView as component_two };
