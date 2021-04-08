import { Component, Host, h, Prop } from '@stencil/core';
export class CryptoView {
  render() {
    return (h(Host, { class: 'hello', style: { color: `${this.color}` } },
      h("h2", null,
        "I am a component two ",
        this.color)));
  }
  static get is() { return "component-two"; }
  static get encapsulation() { return "shadow"; }
  static get properties() { return {
    "color": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "color",
      "reflect": false
    }
  }; }
}
