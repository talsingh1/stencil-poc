import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'component-one',
  styleUrl: 'component-one.css',
  shadow: true,
})
export class CryptoView {

  render() {
    return (
      <Host class={'hello'}>
        I am a component one
      </Host>
    );
  }

}
