import { Component, Host, h } from '@stencil/core';
export class CryptoView {
  render() {
    return (h(Host, { class: 'hello' }, "I am a component two"));
  }
  static get is() { return "component-two"; }
  static get encapsulation() { return "shadow"; }
}
