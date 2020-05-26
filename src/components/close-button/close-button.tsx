import { Component, h, Prop } from "@stencil/core/internal";

@Component({
  tag: "fouette-close-button",
  styleUrl: "./close-button.scss",
  shadow: true,
})
export class CloseButton {
  @Prop({ reflectToAttr: true }) onClose: any;

  render() {
    return <button onClick={() => this.onClose()}></button>;
  }
}
