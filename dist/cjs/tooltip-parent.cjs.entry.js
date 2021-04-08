'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-446661a5.js');

const CryptoView = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, { class: 'hello' }, index.h("div", null, console.log(this), index.h("component-one", { color: this.color }), index.h("component-two", { color: this.color }))));
  }
};

exports.tooltip_parent = CryptoView;
