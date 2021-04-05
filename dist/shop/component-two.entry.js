import { r as registerInstance, h, e as Host } from './index-7c714cf6.js';

const CryptoView = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, { class: 'hello' }, "I am a component two"));
  }
};

export { CryptoView as component_two };
