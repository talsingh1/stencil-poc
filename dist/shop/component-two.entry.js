import { r as registerInstance, h, e as Host } from './index-50a78bb6.js';

const CryptoView = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, { class: 'hello' }, "I am a component two ", this.color));
  }
};

export { CryptoView as component_two };
