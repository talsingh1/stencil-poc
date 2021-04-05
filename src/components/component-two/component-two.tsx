import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'component-two',
  shadow: true,
})
export class CryptoView {

  render() {
    return (
      <Host class={'hello'}>
        I am a component two
      </Host>
    );
  }

}
