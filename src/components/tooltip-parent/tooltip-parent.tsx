import { Component, Host, h, Prop  } from '@stencil/core';

@Component({
  tag: 'tooltip-parent',
  shadow: true,
})
export class CryptoView {
  @Prop() color: string;

  render() {
    return (
      <Host class={'hello'} >
      <div>
        {console.log(this)}
        <component-one color={this.color}></component-one>
        <component-two color={this.color}></component-two>   
        </div>     
      </Host>
    );
  }

}
