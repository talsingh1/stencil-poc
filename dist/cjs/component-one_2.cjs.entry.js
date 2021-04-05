'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-339e604b.js');

const componentOneCss = ":host{display:block}";

const CryptoView$1 = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, { class: 'hello' }, "I am a component one"));
  }
};
CryptoView$1.style = componentOneCss;

const CryptoView = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, { class: 'hello' }, "I am a component two"));
  }
};

exports.component_one = CryptoView$1;
exports.component_two = CryptoView;
