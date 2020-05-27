import { Component, h, Prop, Listen } from "@stencil/core/internal";

@Component({
  tag: "fouette-modal",
  styleUrl: "./modal.scss",
  shadow: true,
})
export class Modal {
  @Prop({ reflectToAttr: true, mutable: true }) opened: boolean;
  @Prop() modalType: string;

  @Listen("close")
  closeHandler() {
    this.opened = false;
  }

  render() {
    const classes = ["fouette-modal"];

    if (this.modalType.includes("narrow")) {
      classes.push("narrow-modal");
    }
    if (this.modalType.includes("border")) {
      classes.push("border-modal");
    }
    return [
      <div class="fouette-modal__backdrop"></div>,
      <div class={classes.join(" ")}>
        <div class="fouette-modal__container">
          <fouette-close-button close={this.closeHandler.bind(this)} />
          <slot />
        </div>
      </div>,
    ];
  }
}
