import { Component, Host, h, Prop } from '@stencil/core';
// import 'stencil-props';
export class CryptoView {
  render() {
    return (h(Host, { class: 'hello', style: { color: `${this.color}` } },
      h("h1", null,
        "  I am a component one ",
        this.color,
        " ")));
  }
  static get is() { return "component-one"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["component-one.css"]
  }; }
  static get styleUrls() { return {
    "$": ["component-one.css"]
  }; }
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
