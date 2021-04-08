import { Component, Host, h, Prop } from '@stencil/core';
export class CryptoView {
  render() {
    return (h(Host, { class: 'hello' },
      h("div", null,
        console.log(this),
        h("component-one", { color: this.color }),
        h("component-two", { color: this.color }))));
  }
  static get is() { return "tooltip-parent"; }
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
