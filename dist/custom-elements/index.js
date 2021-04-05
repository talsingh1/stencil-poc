import { attachShadow, h, Host, proxyCustomElement } from '@stencil/core/internal/client';
export { setAssetPath, setPlatformOptions } from '@stencil/core/internal/client';

const componentOneCss = ":host{display:block}";

const CryptoView$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
  }
  render() {
    return (h(Host, { class: 'hello' }, "I am a component one"));
  }
  static get style() { return componentOneCss; }
};

const CryptoView = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
  }
  render() {
    return (h(Host, { class: 'hello' }, "I am a component two"));
  }
};

const ComponentOne = /*@__PURE__*/proxyCustomElement(CryptoView$1, [1,"component-one"]);
const ComponentTwo = /*@__PURE__*/proxyCustomElement(CryptoView, [1,"component-two"]);
const defineCustomElements = (opts) => {
  if (typeof customElements !== 'undefined') {
    [
      ComponentOne,
  ComponentTwo
    ].forEach(cmp => {
      if (!customElements.get(cmp.is)) {
        customElements.define(cmp.is, cmp, opts);
      }
    });
  }
};

export { ComponentOne, ComponentTwo, defineCustomElements };
