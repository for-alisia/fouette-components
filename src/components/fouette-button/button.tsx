import { Component, h, Prop } from "@stencil/core/internal";

@Component({
  tag: "fouette-button",
  styleUrl: "./button.scss",
  shadow: true,
})
export class Button {
  @Prop() buttonStyle: string;
  @Prop() buttonLink: boolean;
  @Prop() linkUrl: string;

  render() {
    const classes = `fouette-button ${
      this.buttonStyle ? this.buttonStyle : ""
    }`;
    let content;

    if (this.buttonLink) {
      content = (
        <a href={this.linkUrl} class={classes}>
          <slot />
        </a>
      );
    } else {
      content = (
        <button class={classes}>
          <slot />
        </button>
      );
    }

    return content;
  }
}
