import { r as registerInstance, h, H as Host } from './index-52038e17.js';

const componentOneCss = ":host{display:block}";

const CryptoView$1 = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, { class: 'hello' }, "I am a component one"));
  }
};
CryptoView$1.style = componentOneCss;

const CryptoView = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, { class: 'hello' }, "I am a component two"));
  }
};

export { CryptoView$1 as component_one, CryptoView as component_two };
