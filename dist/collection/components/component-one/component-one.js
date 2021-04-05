import { Component, Host, h } from '@stencil/core';
export class CryptoView {
  render() {
    return (h(Host, { class: 'hello' }, "I am a component one"));
  }
  static get is() { return "component-one"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["component-one.css"]
  }; }
  static get styleUrls() { return {
    "$": ["component-one.css"]
  }; }
}
