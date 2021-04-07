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
      <Host class={'hello'}  style={{color: `${this.color}`}}>
      <h1>  I am a component one {this.color} </h1>
      </Host>
    );
  }

}
