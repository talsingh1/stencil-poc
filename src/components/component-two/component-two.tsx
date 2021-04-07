import { Component, Host, h, Prop  } from '@stencil/core';

@Component({
  tag: 'component-two',
  shadow: true,
})
export class CryptoView {
  @Prop() color: string;

  render() {
    return (
      <Host class={'hello'} style={{color: `${this.color}`}}>
        <h2>I am a component two {this.color}</h2>
      </Host>
    );
  }

}
