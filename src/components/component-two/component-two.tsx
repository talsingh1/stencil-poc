import { Component, Host, h, Prop  } from '@stencil/core';

@Component({
  tag: 'component-two',
  shadow: true,
})
export class CryptoView {
  @Prop() color: string;

  render() {
    return (
      <Host class={'hello'}>
        I am a component two {this.color}
      </Host>
    );
  }

}
