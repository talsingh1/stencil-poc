'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-446661a5.js');

const componentOneCss = ":host{display:block}";

const CryptoView$1 = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, { class: 'hello', style: { color: `${this.color}` } }, index.h("h1", null, "  I am a component one ", this.color, " ")));
  }
};
CryptoView$1.style = componentOneCss;

const CryptoView = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, { class: 'hello', style: { color: `${this.color}` } }, index.h("h2", null, "I am a component two ", this.color)));
  }
};

exports.component_one = CryptoView$1;
exports.component_two = CryptoView;
