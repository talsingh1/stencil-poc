import { attachShadow, h, Host, proxyCustomElement } from '@stencil/core/internal/client';
export { setAssetPath, setPlatformOptions } from '@stencil/core/internal/client';

const componentOneCss = ":host{display:block}";

const CryptoView$2 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
  }
  render() {
    return (h(Host, { class: 'hello', style: { color: `${this.color}` } }, h("h1", null, "  I am a component one ", this.color, " ")));
  }
  static get style() { return componentOneCss; }
};

const CryptoView$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
  }
  render() {
    return (h(Host, { class: 'hello', style: { color: `${this.color}` } }, h("h2", null, "I am a component two ", this.color)));
  }
};

const CryptoView = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
  }
  render() {
    return (h(Host, { class: 'hello' }, h("div", null, console.log(this), h("component-one", { color: this.color }), h("component-two", { color: this.color }))));
  }
};

const ComponentOne = /*@__PURE__*/proxyCustomElement(CryptoView$2, [1,"component-one",{"color":[1]}]);
const ComponentTwo = /*@__PURE__*/proxyCustomElement(CryptoView$1, [1,"component-two",{"color":[1]}]);
const TooltipParent = /*@__PURE__*/proxyCustomElement(CryptoView, [1,"tooltip-parent",{"color":[1]}]);
const defineCustomElements = (opts) => {
  if (typeof customElements !== 'undefined') {
    [
      ComponentOne,
  ComponentTwo,
  TooltipParent
    ].forEach(cmp => {
      if (!customElements.get(cmp.is)) {
        customElements.define(cmp.is, cmp, opts);
      }
    });
  }
};

export { ComponentOne, ComponentTwo, TooltipParent, defineCustomElements };
