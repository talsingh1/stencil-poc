import { Component, Host, h, Prop  } from '@stencil/core';
// import 'stencil-props';


@Component({
  tag: 'component-one',
  styleUrl: 'component-one.css',
  shadow: true,
})
export class CryptoView {
  @Prop() color: string;

  render() {
    return (
      <Host class={'hello'}>
        I am a component one {this.color}
      </Host>
    );
  }

}
